import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blockchain Proxy Server')
    .setDescription('Description API for proxy server')
    .setVersion('0.0.1')
    .addBearerAuth({ description: 'JWT authorization', type: 'http' }, 'JWT')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(Number(process.env.SERVICE_PORT));
}
bootstrap();
