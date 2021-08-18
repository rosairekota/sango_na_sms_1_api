import { Module } from '@nestjs/common';
import { ChildVaccinationController } from './child-vaccination.controller';
import { ChildVaccinationService } from './child-vaccination.service';

@Module({
  controllers: [ChildVaccinationController],
  providers: [ChildVaccinationService],
})
export class ChildVaccinationModule {}
