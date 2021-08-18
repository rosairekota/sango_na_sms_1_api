/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAireDto } from 'src/aire/dto/update-aire.dto';
import { Repository } from 'typeorm';
import { ChildRegistrationEntity } from './child-registration.entity';
import { AddChildRegistrationDto } from './dto/add-child-registration.dto';
import { UpdateChildRegistrationDto } from './dto/update-child-registration.dto';

@Injectable()
export class ChildRegistrationService {
    constructor(
        @InjectRepository(ChildRegistrationEntity)
        private childRegistrationRepository : Repository<ChildRegistrationEntity>
      
    ){}


    async add(childRegistration :AddChildRegistrationDto) : Promise<ChildRegistrationEntity>{
        return await this.childRegistrationRepository.save(childRegistration);
    }

    async delete(id:number) :Promise<ChildRegistrationEntity>{
        const registration = await this.childRegistrationRepository.findOne(id);
        return await this.childRegistrationRepository.remove(registration)
    }

    async update(idChildRegistration:number,registration:UpdateChildRegistrationDto) : Promise<ChildRegistrationEntity>{
        const editingRegistration = await this.childRegistrationRepository.preload({idChildRegistration,...registration})
        return await this.childRegistrationRepository.save(editingRegistration);
    }

    async findAll():Promise<ChildRegistrationEntity[]>{
        return await this.childRegistrationRepository.find();
    }
}
