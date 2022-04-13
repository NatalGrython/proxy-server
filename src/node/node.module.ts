import { forwardRef, Module } from '@nestjs/common';
import { NodeService } from './node.service';
import { NodeController } from './node.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Node } from '../entities/node.entity';
import { User } from 'src/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [NodeService],
  controllers: [NodeController],
  imports: [
    TypeOrmModule.forFeature([Node, User]),
    forwardRef(() => AuthModule),
  ],
  exports: [NodeService],
})
export class NodeModule {}
