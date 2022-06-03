import { Inject, Injectable } from '@nestjs/common';
import { EXCEL_READER } from './readerService/constant';
import { FileSchema } from './readerService/provider';

@Injectable()
export class ExcelService {
  constructor(@Inject(EXCEL_READER) private excelReader: FileSchema) {}

  check() {
    if (this.excelReader.errors.length) {
      throw new Error('Errors in excel file');
    }
    return this.excelReader.rows;
  }
}
