import { Module } from '@nestjs/common';
import { CentreController } from './centre.controller';
import { CentreService } from './centre.service';

@Module({
  controllers: [CentreController],
  providers: [CentreService]
})
export class CentreModule {}
