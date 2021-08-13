import { Module } from '@nestjs/common';
import { AntigenefemmeService } from './antigenefemme.service';
import { AntigenefemmeController } from './antigenefemme.controller';
import { AntigenefemmeEntity } from './antigenefemme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AntigenefemmeEntity])],
  providers: [AntigenefemmeService],
  controllers: [AntigenefemmeController],
})
export class AntigenefemmeModule {}
