import { Module } from '@nestjs/common';
import { ProvincialProfessionalService } from './provincial-professional.service';
import { ProvincialProfessionalController } from './provincial-professional.controller';

@Module({
  providers: [ProvincialProfessionalService],
  controllers: [ProvincialProfessionalController]
})
export class ProvincialProfessionalModule {}
