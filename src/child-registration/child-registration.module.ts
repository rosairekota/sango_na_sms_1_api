/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChildRegistrationService } from './child-registration.service';
import { ChildRegistrationController } from './child-registration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildRegistrationEntity } from './child-registration.entity';

@Module({
<<<<<<< HEAD
  imports:[TypeOrmModule.forFeature([ChildRegistrationEntity])],
=======
  imports: [TypeOrmModule.forFeature([ChildRegistrationEntity])],
>>>>>>> 0e5a467738bcee0122a3fc64bcf59a61f73a20da
  providers: [ChildRegistrationService],
  controllers: [ChildRegistrationController],
})
export class ChildRegistrationModule {}
