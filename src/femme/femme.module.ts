import { Module } from '@nestjs/common';
import { FemmeService } from './femme.service';
import { FemmeController } from './femme.controller';

@Module({
  providers: [FemmeService],
  controllers: [FemmeController]
})
export class FemmeModule {}
