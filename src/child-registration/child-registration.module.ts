import { Module } from '@nestjs/common';
import { ChildRegistrationService } from './child-registration.service';
import { ChildRegistrationController } from './child-registration.controller';

@Module({
  providers: [ChildRegistrationService],
  controllers: [ChildRegistrationController]
})
export class ChildRegistrationModule {}
