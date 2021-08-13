import { Module } from '@nestjs/common';
import { ChildAntigenService } from './child-antigen.service';
import { ChildAntigenController } from './child-antigen.controller';

@Module({
  providers: [ChildAntigenService],
  controllers: [ChildAntigenController]
})
export class ChildAntigenModule {}
