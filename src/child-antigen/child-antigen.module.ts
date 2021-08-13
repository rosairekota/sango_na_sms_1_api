import { Module } from '@nestjs/common';
import { ChildAntigenService } from './child-antigen.service';
import { ChildAntigenController } from './child-antigen.controller';
import { ChildAntigenEntity } from './child-antigen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ChildAntigenEntity])],
  providers: [ChildAntigenService],
  controllers: [ChildAntigenController],
})
export class ChildAntigenModule {}
