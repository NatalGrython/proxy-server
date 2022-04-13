import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CreateNodeDto } from './dto/create-node.dto';
import { NodeService } from './node.service';
import { NodeBodyPipe } from './pipes/node.body.pipe';
import { NodeParamPipe } from './pipes/node.param.pipe';

@Controller('node')
export class NodeController {
  constructor(private nodeService: NodeService) {}

  @Post()
  register(@Body(NodeBodyPipe) body: CreateNodeDto) {
    return this.nodeService.registerNode(body);
  }

  @Post('/delete')
  delete(@Body(NodeBodyPipe) body: CreateNodeDto) {
    return this.nodeService.deleteNode(body);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  getNode(@Param('id', NodeParamPipe) id: number) {
    return this.nodeService.getNode(id);
  }
  @Get()
  @UseGuards(JwtAuthGuard)
  getAllNodes() {
    return this.nodeService.getAllNodes();
  }
}
