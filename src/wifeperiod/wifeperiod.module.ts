/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WifeperiodController } from './wifeperiod.controller';
import { WifeperiodService } from './wifeperiod.service';

@Module({
  controllers: [WifeperiodController],
  providers: [WifeperiodService],
})
export class WifeperiodModule {}
