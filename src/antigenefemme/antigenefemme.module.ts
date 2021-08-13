import { Module } from '@nestjs/common';
import { AntigenefemmeService } from './antigenefemme.service';
import { AntigenefemmeController } from './antigenefemme.controller';

@Module({
  providers: [AntigenefemmeService],
  controllers: [AntigenefemmeController]
})
export class AntigenefemmeModule {}
