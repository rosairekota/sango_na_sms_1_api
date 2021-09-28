/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';
import { ChildVaccinationService } from 'src/child-vaccination/child-vaccination.service';
import { Repository } from 'typeorm';
import { CarnetEntity } from './carnet.entity';
import { SendingCarnetDto } from './dto/SendingCarnetDto';

@Injectable()
export class CarnetService {

    constructor(
        @InjectRepository (CarnetEntity)
         private readonly carnetRepository : Repository<CarnetEntity>,
        
         @InjectRepository (ChildVaccinationEntity)
         private  readonly vaccinationRepostiory : Repository<ChildVaccinationEntity>
    ){}
    
    async findCarnetsByEnfant(id:number) :Promise<SendingCarnetDto[]>{
        const carnet = await this.carnetRepository.find({ where: { idEnfant: id},order:{indice:"ASC",intitule_antigene:"ASC"}});
        let myCarnet : SendingCarnetDto [];
        let myCarnetDto : SendingCarnetDto;
        for await (const item of carnet) {
           myCarnetDto.carnet ={...item};
            if (item.vaccinationEnfantId) {
                myCarnetDto.vaccination = await this.vaccinationRepostiory.findOne(item.vaccinationEnfantId);  
            }
        }
      
        myCarnet.push(myCarnetDto)

        return myCarnet;
    }
}
