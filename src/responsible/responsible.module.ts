/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsibleEntity } from './responsible.entity';
import { ChildEntity } from 'src/child/child.entity';
import { ChildService } from 'src/child/child.service';
import { CentreService } from 'src/centre/centre.service';
import { ChildRegistrationEntity } from 'src/child-registration/child-registration.entity';
import { ChildRegistrationService } from 'src/child-registration/child-registration.service';
import { CentreEntity } from 'src/centre/centre.entity';
import { ChildController } from 'src/child/child.controller';
import { ChildSearchView } from 'src/child/search/child-search.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ChildEntity,
    ResponsibleEntity,ChildRegistrationEntity,CentreEntity,ChildSearchView])],
  providers: [ResponsibleService,ChildService,ChildRegistrationService,CentreService],
  controllers: [ResponsibleController]
})
export class ResponsibleModule {}
