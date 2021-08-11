import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //configure pipe Validations
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // configure swagger Module
  const config = new DocumentBuilder()
    .setTitle('API SANGO NA SMS 1')
    .setDescription('Rappel par sms des dates de rendez-vous des vaccinations')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3080);
}
bootstrap();
