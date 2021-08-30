/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ZoneController } from './zone.controller';
import { ZoneService } from './zone.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZoneEntity } from './zone.entity';
import { ProvinceEntity } from 'src/province/province.entity';
import { Filteredzone } from './Filteredzone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ZoneEntity,ProvinceEntity,Filteredzone])],
  controllers: [ZoneController],
  providers: [ZoneService],
})
export class ZoneModule {}
