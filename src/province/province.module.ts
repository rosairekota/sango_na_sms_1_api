import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceController } from './province.controller';
import { ProvinceEntity } from './province.entity';
import { ProvinceService } from './province.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinceEntity])],
  controllers: [ProvinceController],
  providers: [ProvinceService],
})
export class ProvinceModule {}
