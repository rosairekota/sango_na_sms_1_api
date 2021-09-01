/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChildVaccinationController } from './child-vaccination.controller';
import { ChildVaccinationService } from './child-vaccination.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChildVaccinationEntity])],
  controllers: [ChildVaccinationController],
  providers: [ChildVaccinationService],
})
export class ChildVaccinationModule {}
