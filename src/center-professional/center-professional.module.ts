import { Module } from '@nestjs/common';
import { CenterProfessionalService } from './center-professional.service';

@Module({
  providers: [CenterProfessionalService],
})
export class CenterProfessionalModule {}
