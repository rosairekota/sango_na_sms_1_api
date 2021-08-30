import { Module } from '@nestjs/common';
import { CenterProfessionalService } from './center-professional.service';
import { CenterProfessionalController } from './center-professional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CenterProfessionalEntity } from './center-professional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CenterProfessionalEntity])],
  providers: [CenterProfessionalService],
  controllers: [CenterProfessionalController],
})
export class CenterProfessionalModule {}
