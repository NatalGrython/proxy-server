import { Provider } from '@nestjs/common';
import { EXCEL_READER } from './constant';
import readXlsxFile from 'read-excel-file/node';
import { ConfigService } from '@nestjs/config';
import { Schema, SchemaEntry } from 'read-excel-file/types';

const schema: Schema = {
  Логин: {
    type: String,
    prop: 'login',
  },
  Пароль: {
    type: String,
    prop: 'password',
  },
  Фамилия: {
    type: String,
    prop: 'surname',
  },
  Имя: {
    type: String,
    prop: 'name',
  },
  Отчество: {
    type: String,
    prop: 'patronymic',
  },
  Роль: {
    type: String,
    prop: 'role',
  },
};

export type FileSchema = {
  errors: any[];
  rows: {
    login: string;
    password: string;
    surname: string;
    name: string;
    patronymic: string;
    role: string;
  }[];
};

export const ExcelReader: Provider = {
  provide: EXCEL_READER,
  useFactory(configService: ConfigService): Promise<FileSchema> {
    return readXlsxFile(configService.get('SERVICE_EXCEL_PATH'), { schema });
  },
  inject: [ConfigService],
};
