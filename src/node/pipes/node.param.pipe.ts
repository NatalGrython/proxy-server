import { PipeTransform, BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class NodeParamPipe implements PipeTransform {
  transform(value: string) {
    if (Number.isNaN(Number(value))) {
      throw new BadRequestException();
    }

    return Number(value);
  }
}
