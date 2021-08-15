/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChildRegistrationEntity } from './child-registration.entity';
import { ChildRegistrationService } from './child-registration.service';
import { AddChildRegistrationDto } from './dto/add-child-registration.dto';

@ApiTags('Child-registrations')
@Controller('child-registration')
export class ChildRegistrationController {

    constructor(private childRegistrationService : ChildRegistrationService){}
    @Post()
    async create(childRegistration : AddChildRegistrationDto) : Promise<ChildRegistrationEntity>{
        return await this.childRegistrationService.add(childRegistration);
    }
}
