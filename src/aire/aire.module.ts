import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AireController } from './aire.controller';
import { AireEntity } from './aire.entity';
import { AireService } from './aire.service';

@Module({
    imports:[TypeOrmModule.forFeature([AireEntity])],
  controllers: [AireController],
  providers: [AireService],
})
export class AireModule {}
