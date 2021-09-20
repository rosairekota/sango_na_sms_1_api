/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AireController } from './aire.controller';
import { AireEntity } from './aire.entity';
import { AireService } from './aire.service';
import { FilteredAire } from './FilteredAire.entity';

@Module({
    imports:[TypeOrmModule.forFeature([AireEntity,FilteredAire])],
  controllers: [AireController],
  providers: [AireService],
})
export class AireModule {}
