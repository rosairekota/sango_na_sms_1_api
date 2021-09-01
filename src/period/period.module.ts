import { Module } from '@nestjs/common';
import { ChildPeriodController } from './period.controller';
import { ChildPeriodService } from './period.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildPeriodEntity } from './period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChildPeriodEntity])],
  controllers: [ChildPeriodController],
  providers: [ChildPeriodService],
})
export class ChildPeriodModule {}
