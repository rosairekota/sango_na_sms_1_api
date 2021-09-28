/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarnetService } from './carnet.service';
import { CarnetController } from './carnet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarnetEntity } from './carnet.entity';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';
import { ChildVaccinationService } from 'src/child-vaccination/child-vaccination.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarnetEntity,ChildVaccinationEntity]),
  ],
  providers: [CarnetService],
  controllers: [CarnetController]
})
export class CarnetModule {}
