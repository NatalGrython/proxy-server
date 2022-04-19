import { Controller, Post, Body, Param, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Node } from 'src/entities/node.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CreateNodeDto } from './dto/create-node.dto';
import { NodeService } from './node.service';
import { NodeBodyPipe } from './pipes/node.body.pipe';
import { NodeParamPipe } from './pipes/node.param.pipe';

@ApiTags('Node')
@Controller('node')
export class NodeController {
  constructor(private nodeService: NodeService) {}

  @ApiResponse({
    type: Node,
    status: 201,
  })
  @Post()
  register(@Body(NodeBodyPipe) body: CreateNodeDto) {
    return this.nodeService.registerNode(body);
  }

  @ApiResponse({
    type: Node,
    status: 200,
  })
  @Post('/delete')
  delete(@Body(NodeBodyPipe) body: CreateNodeDto) {
    return this.nodeService.deleteNode(body);
  }

  @ApiResponse({
    type: Node,
    status: 200,
  })
 
  @Get('/:id')
  getNode(@Param('id', NodeParamPipe) id: number) {
    return this.nodeService.getNode(id);
  }

  @ApiResponse({
    type: Node,
    status: 200,
    isArray: true,
  })
 
  @Get()
  getAllNodes() {
    return this.nodeService.getAllNodes();
  }
}
