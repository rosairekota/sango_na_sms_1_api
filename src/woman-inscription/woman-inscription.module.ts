import { Module } from '@nestjs/common';
import { WomanInscriptionController } from './woman-inscription.controller';
import { WomanInscriptionService } from './woman-inscription.service';

@Module({
  controllers: [WomanInscriptionController],
  providers: [WomanInscriptionService]
})
export class WomanInscriptionModule {}
