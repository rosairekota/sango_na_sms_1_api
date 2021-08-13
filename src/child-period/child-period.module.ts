import { Module } from '@nestjs/common';
import { ChildPeriodController } from './child-period.controller';
import { ChildPeriodService } from './child-period.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildPeriodEntity } from './child-perio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChildPeriodEntity])],
  controllers: [ChildPeriodController],
  providers: [ChildPeriodService],
})
export class ChildPeriodModule {}
