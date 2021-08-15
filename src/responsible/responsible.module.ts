import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsibleEntity } from './responsible.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ResponsibleEntity])],
  providers: [ResponsibleService],
  controllers: [ResponsibleController]
})
export class ResponsibleModule {}
