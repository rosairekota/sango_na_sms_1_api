import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomanInscriptionController } from './woman-inscription.controller';
import { WomanInscriptionEntity } from './woman-inscription.entity';
import { WomanInscriptionService } from './woman-inscription.service';

@Module({
  imports: [TypeOrmModule.forFeature([WomanInscriptionEntity])],
  controllers: [WomanInscriptionController],
  providers: [WomanInscriptionService],
})
export class WomanInscriptionModule {}
