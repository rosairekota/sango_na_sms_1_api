/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChildVaccinationController } from './child-vaccination.controller';
import { ChildVaccinationService } from './child-vaccination.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';
import {ChildVaccinationView} from "src/child-vaccination/search/child-vaccination-search.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ChildVaccinationEntity,ChildVaccinationView])],
  controllers: [ChildVaccinationController],
  providers: [ChildVaccinationService],
})
export class ChildVaccinationModule {}
