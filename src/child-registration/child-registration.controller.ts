/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChildRegistrationEntity } from './child-registration.entity';
import { ChildRegistrationService } from './child-registration.service';
import { AddChildRegistrationDto } from './dto/add-child-registration.dto';
import { UpdateChildRegistrationDto } from './dto/update-child-registration.dto';

@ApiTags('Child-registrations')
@Controller('child-registration')
export class ChildRegistrationController {

    constructor(private childRegistrationService : ChildRegistrationService){}
    @Post()
    async create(childRegistration : AddChildRegistrationDto) : Promise<ChildRegistrationEntity>{
        return await this.childRegistrationService.add(childRegistration);
    }

    @Patch('/:id')
    async edit(@Param('id',ParseIntPipe) id : number,childRegistration:UpdateChildRegistrationDto):Promise<ChildRegistrationEntity>{
        return await this.childRegistrationService.update(id,childRegistration);
    }

    @Delete('/:id')
    async remove(@Param('id',ParseIntPipe) id : number) : Promise<ChildRegistrationEntity>{
        return await this.childRegistrationService.delete(id);
    }

    @Get()
    async getAll():Promise<ChildRegistrationEntity[]>{
        return await this.childRegistrationService.findAll();
    }
}
