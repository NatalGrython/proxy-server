import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder.module';
import { Seeder } from './seeder.serivce';

const bootstrap = async () => {
  const context = await NestFactory.createApplicationContext(SeederModule);
  const seeder = context.get(Seeder);
  const logger = context.get(Logger);
  try {
    logger.log('Start seed');
    await seeder.seed();
  } catch (error) {
    console.log(error);
    logger.error('Error seed');
  } finally {
    await context.close();
  }
};

bootstrap();
