import { Module } from '@nestjs/common';
import { ExcelService } from './exel.service';
import { ExcelReader } from './readerService/provider';

@Module({
  providers: [ExcelReader, ExcelService],
  exports: [ExcelService],
})
export class ExcelModule {}
