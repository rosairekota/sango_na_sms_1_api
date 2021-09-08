/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarnetService } from './carnet.service';
import { CarnetController } from './carnet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarnetEntity } from './carnet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarnetEntity]),
  ],
  providers: [CarnetService],
  controllers: [CarnetController]
})
export class CarnetModule {}
