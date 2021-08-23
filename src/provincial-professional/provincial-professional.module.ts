import { Module } from '@nestjs/common';
import { ProvincialProfessionalService } from './provincial-professional.service';
import { ProvincialProfessionalController } from './provincial-professional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvincialProfessionalEntity } from './provincial-professional.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProvincialProfessionalEntity])],
  providers: [ProvincialProfessionalService],
  controllers: [ProvincialProfessionalController],
})
export class ProvincialProfessionalModule {}
