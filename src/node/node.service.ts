import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Node } from '../entities/node.entity';
import { CreateNodeDto } from './dto/create-node.dto';

@Injectable()
export class NodeService {
  constructor(
    @InjectRepository(Node) private nodeRepository: Repository<Node>,
  ) {}

  registerNode(node: CreateNodeDto) {
    return this.nodeRepository.save({
      ...node,
    });
  }

  getNode(id: number) {
    return this.nodeRepository.findOne({
      where: {
        id,
      },
    });
  }

  async deleteNode(node: CreateNodeDto) {
    const currentNode = await this.nodeRepository.findOne({
      where: {
        host: node.host,
        port: node.port,
      },
    });
    return this.nodeRepository.delete(currentNode);
  }

  getAllNodes() {
    return this.nodeRepository.find();
  }
}
