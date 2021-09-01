/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChildVaccinationController } from './child-vaccination.controller';
import { ChildVaccinationService } from './child-vaccination.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';
<<<<<<< HEAD
// import { ChildAntigenEntity } from 'src/antigen/child-antigen.entity';
=======
>>>>>>> 4539f70fa5f8a6cf4cdefc506e44b19ceb32c2a6

@Module({
  imports: [TypeOrmModule.forFeature([ChildVaccinationEntity])],
  controllers: [ChildVaccinationController],
  providers: [ChildVaccinationService],
})
export class ChildVaccinationModule {}
