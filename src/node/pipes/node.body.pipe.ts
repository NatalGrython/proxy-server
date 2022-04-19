import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { CreateNodeDto } from '../dto/create-node.dto';

@Injectable()
export class NodeBodyPipe implements PipeTransform {
  transform(value: Partial<CreateNodeDto>) {
    if (value.host && value.port) {
      return value;
    }
    throw new BadRequestException();
  }
}
