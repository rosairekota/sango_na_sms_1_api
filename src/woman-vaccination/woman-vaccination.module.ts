/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WomanVaccinationService } from './woman-vaccination.service';
import { WomanVaccinationController } from './woman-vaccination.controller';

@Module({
  providers: [WomanVaccinationService],
  controllers: [WomanVaccinationController]
})
export class WomanVaccinationModule {}
