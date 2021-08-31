import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { ChildEntity } from './child.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildRegistrationEntity } from 'src/child-registration/child-registration.entity';
import { CentreEntity } from 'src/centre/centre.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      ChildEntity,
      ChildRegistrationEntity,
      CentreEntity,
    ]),
  ],
  providers: [ChildService],
  controllers: [ChildController],
})
export class ChildModule {}
