import { Module } from '@nestjs/common';
import { CarnetService } from './carnet.service';
import { CarnetController } from './carnet.controller';

@Module({
  providers: [CarnetService],
  controllers: [CarnetController]
})
export class CarnetModule {}
