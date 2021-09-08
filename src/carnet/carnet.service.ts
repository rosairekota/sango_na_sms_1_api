/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarnetEntity } from './carnet.entity';

@Injectable()
export class CarnetService {

    constructor(
        @InjectRepository (CarnetEntity)
         private readonly carnetRepository : Repository<CarnetEntity>,
    ){}
    
    async findCarnetsByEnfant(id:number) :Promise<CarnetEntity[]>{
        return this.carnetRepository.find({ where: { idEnfant: id}});
    }
}
