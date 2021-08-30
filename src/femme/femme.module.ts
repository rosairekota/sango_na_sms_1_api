import { Module } from '@nestjs/common';
import { FemmeService } from './femme.service';
import { FemmeController } from './femme.controller';
import { FemmeEntity } from './femme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FemmeEntity])],
  providers: [FemmeService],
  controllers: [FemmeController],
})
export class FemmeModule {}
