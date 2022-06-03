import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ExcelModule } from '../exel/exel.module';
import { UserSeederService } from './user.service';

@Module({
  imports: [AuthModule, ExcelModule],
  providers: [UserSeederService],
  exports: [UserSeederService],
})
export class UserSeederModule {}
