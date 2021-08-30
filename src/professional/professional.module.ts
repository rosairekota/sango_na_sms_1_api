import { Module } from '@nestjs/common';
import { ProfessionalController } from './professional.controller';
import { ProfessionalService } from './professional.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalEntity } from './professional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessionalEntity])],
  controllers: [ProfessionalController],
  providers: [ProfessionalService],
})
export class ProfessionalModule {}
