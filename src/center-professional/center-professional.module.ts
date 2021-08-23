import { Module } from '@nestjs/common';
import { CenterProfessionalService } from './center-professional.service';
import { CenterProfessionalController } from './center-professional.controller';

@Module({
  providers: [CenterProfessionalService],
  controllers: [CenterProfessionalController],
})
export class CenterProfessionalModule {}
