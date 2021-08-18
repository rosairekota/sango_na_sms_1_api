import { Module } from '@nestjs/common';
import { ChildRegistrationService } from './child-registration.service';
import { ChildRegistrationController } from './child-registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildRegistrationEntity } from './child-registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChildRegistrationEntity])],
  providers: [ChildRegistrationService],
  controllers: [ChildRegistrationController],
})
export class ChildRegistrationModule {}
