import { Module } from '@nestjs/common';
import { PeriodController } from './period.controller';
import { PeriodService } from './period.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodEntity } from './period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PeriodEntity])],
  controllers: [PeriodController],
  providers: [PeriodService],
})
export class PeriodModule {}
