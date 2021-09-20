import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEntity } from './calendar.entity';
import { AntigenEntity } from 'src/antigen/antigen.entity';
import { PeriodEntity } from 'src/period/period.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CalendarEntity, AntigenEntity, PeriodEntity]),
  ],
  providers: [CalendarService],
  controllers: [CalendarController],
})
export class CalendarModule {}
