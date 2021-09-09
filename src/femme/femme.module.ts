import { Module } from '@nestjs/common';
import { FemmeService } from './femme.service';
import { FemmeController } from './femme.controller';
import { FemmeEntity } from './femme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WomanInscriptionEntity } from 'src/woman-inscription/woman-inscription.entity';
import { ResponsibleEntity } from 'src/responsible/responsible.entity';
import { CentreEntity } from 'src/centre/centre.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FemmeEntity,
      ResponsibleEntity,
      WomanInscriptionEntity,
      CentreEntity,
    ]),
  ],
  providers: [FemmeService],
  controllers: [FemmeController],
})
export class FemmeModule {}
