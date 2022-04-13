import { HttpModule } from '@nestjs/axios';
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { NodeModule } from 'src/node/node.module';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => NodeModule),
    JwtModule.register({
      secret: 'secret',
    }),
    HttpModule.register({ timeout: 60000 }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
