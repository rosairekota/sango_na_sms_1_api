/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsibleEntity } from './responsible.entity';
import { ChildEntity } from 'src/child/child.entity';
import { ChildService } from 'src/child/child.service';

@Module({
  imports:[TypeOrmModule.forFeature([ResponsibleEntity,ChildEntity])],
  providers: [ResponsibleService,ChildService],
  controllers: [ResponsibleController]
})
export class ResponsibleModule {}
