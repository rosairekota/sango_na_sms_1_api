import { Module } from '@nestjs/common';
import { ZoneController } from './zone.controller';
import { ZoneService } from './zone.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneEntity } from './zone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ZoneEntity])],
  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
