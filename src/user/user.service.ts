import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    return this.userRepository.save({ ...user });
  }

  getAllUsers() {
    return this.userRepository.find({
      relations: ['node'],
      select: ['id', 'address', 'node', 'role', 'login'],
    });
  }

  getUserByLogin(login: string) {
    return this.userRepository.findOne({ where: { login } });
  }
}
