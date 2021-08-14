/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WifeperiodController } from './wifeperiod.controller';
import { WifeperiodEntity } from './wifeperiod.entity';
import { WifeperiodService } from './wifeperiod.service';

@Module({
  imports:[TypeOrmModule.forFeature([WifeperiodEntity])],
  controllers: [WifeperiodController],
  providers: [WifeperiodService]
})
export class WifeperiodModule {}
