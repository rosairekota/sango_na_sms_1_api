import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AntigenController } from './antigen.controller';
import { AntigenService } from './antigen.service';
import { AntigenEntity } from './antigen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AntigenEntity])],
  controllers: [AntigenController],
  providers: [AntigenService],
})
export class AntigenModule {}
