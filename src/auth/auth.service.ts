import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';
import { compare, hash } from 'bcryptjs';
import { NodeService } from 'src/node/node.service';
import { HttpService } from '@nestjs/axios';
import { BlockChainCreditionls } from './types';
import { firstValueFrom, map } from 'rxjs';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private nodeService: NodeService,
    private httpService: HttpService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto);
    return this.generateToken(user);
  }

  async registration(registrationDto: RegistrationDto) {
    if (registrationDto.password !== registrationDto.confirmPassword) {
      throw new HttpException('Passoword not valid', 400);
    }

    const candidate = await this.userService.getUserByLogin(
      registrationDto.login,
    );

    if (candidate) {
      throw new HttpException('Exist user', 400);
    }

    const passwordHash = await hash(registrationDto.password, 5);

    const node = await this.nodeService.getNode(registrationDto.nodeId);

    const data = await this.getBlockChainCreditionls(node.host, node.port);

    const { address, privateKey } = data;

    if (registrationDto.role === 'teacher') {
      await this.teacherSetBalance(node.host, node.port, address);
    }

    const user = await this.userService.createUser({
      password: passwordHash,
      login: registrationDto.login,
      node,
      privateKey,
      address,
      role: registrationDto.role,
    });
    return this.generateToken(user);
  }

  async teacherSetBalance(host: string, port: number, teacherAddress: string) {
    //{ port: number; host: string }[]

    const responseOwner = this.httpService.get<BlockChainCreditionls>(
      `http://${host}:${port}/api/owner`,
    );

    const owner = await firstValueFrom(
      responseOwner.pipe(map((res) => res.data)),
    );

    const nodes = await this.nodeService.getAllNodes();

    const transactionResponse = this.httpService.post(
      `http://${host}:${port}/api/transaction`,
      {
        address: owner.address,
        privateKey: owner.privateKey,
        recipient: teacherAddress,
        value: 1000,
        reason: 'Add new teacher',
        hard: true,
        addresses: nodes.map((item) => ({
          host: item.host,
          port: item.port,
        })),
      },
    );

    const transaction = await firstValueFrom(
      transactionResponse.pipe(map((res) => res.data)),
    );
    console.log(transaction);
  }

  async getBlockChainCreditionls(host: string, port: number) {
    const response = this.httpService.get<BlockChainCreditionls>(
      `http://${host}:${port}/api/user`,
    );
    return firstValueFrom(response.pipe(map((res) => res.data)));
  }

  generateToken(user: User) {
    const payload = {
      login: user.login,
      address: user.address,
      role: user.role,
      id: user.id,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(loginDto: LoginDto) {
    const candidate = await this.userService.getUserByLogin(loginDto.login);

    if (!candidate) {
      throw new HttpException('No user', 400);
    }

    const isEqualPassword = await compare(
      loginDto.password,
      candidate.password,
    );

    if (isEqualPassword) {
      return candidate;
    }
    throw new HttpException('No password', 401);
  }
}
