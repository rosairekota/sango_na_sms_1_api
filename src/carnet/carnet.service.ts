/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';
import { ChildVaccinationService } from 'src/child-vaccination/child-vaccination.service';
import { Repository } from 'typeorm';
import { CarnetEntity } from './carnet.entity';

@Injectable()
export class CarnetService {

    constructor(
        @InjectRepository (CarnetEntity)
         private readonly carnetRepository : Repository<CarnetEntity>,
        
         @InjectRepository (ChildVaccinationEntity)
         private  readonly vaccinationRepostiory : Repository<ChildVaccinationEntity>
    ){}
    
    async findCarnetsByEnfant(id:number) :Promise<CarnetEntity[]>{
        const carnet = await this.carnetRepository.find({ where: { idEnfant: id},order:{indice:"ASC",intitule_antigene:"ASC"}});

        for await (const item of carnet) {
            
            if (item.vaccinationEnfantId) {
                item.vaccination = await this.vaccinationRepostiory.findOne(item.vaccinationEnfantId);  
            }
        }

        return carnet;
    }
}
