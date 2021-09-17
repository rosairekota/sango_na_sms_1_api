/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WomanVaccinationService } from './woman-vaccination.service';
import { WomanVaccinationController } from './woman-vaccination.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomanVaccinationEntity } from './woman-vaccination.entity';
import {WomanVaccinationView} from './search/woman-vaccination-search.entity';

@Module({
  imports:[TypeOrmModule.forFeature([WomanVaccinationEntity,WomanVaccinationView])],
  providers: [WomanVaccinationService],
  controllers: [WomanVaccinationController]
})
export class WomanVaccinationModule {}
