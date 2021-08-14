/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WomanVaccinationService } from './woman-vaccination.service';
import { WomanVaccinationController } from './woman-vaccination.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomanVaccinationEntity } from './woman-vaccination.entity';

@Module({
  imports:[TypeOrmModule.forFeature([WomanVaccinationEntity])],
  providers: [WomanVaccinationService],
  controllers: [WomanVaccinationController]
})
export class WomanVaccinationModule {}
