import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildRegistrationEntity } from './child-registration.entity';

@Injectable()
export class ChildRegistrationService {
    constructor(
        @InjectRepository(ChildRegistrationEntity)
      
    )
}
