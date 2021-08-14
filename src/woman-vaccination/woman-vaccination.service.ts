/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAireDto } from 'src/aire/dto/update-aire.dto';
import { WomanInscriptionService } from 'src/woman-inscription/woman-inscription.service';
import { Repository } from 'typeorm';
import { AddWomanVaccinationDto } from './dto/add-woman-vaccination.dto';
import { UpdateWomanVaccinationDto } from './dto/update-woman-vaccination.dto';
import { WomanVaccinationEntity } from './woman-vaccination.entity';

@Injectable()
export class WomanVaccinationService {
    constructor(
        @InjectRepository(WomanVaccinationEntity)
        private womanVaccinationService : Repository<WomanVaccinationEntity>
    )
    {

    }

    async findAll() : Promise<WomanVaccinationEntity[]>{
        return await this.womanVaccinationService.find()
    }

    async add(womanVaccination : AddWomanVaccinationDto): Promise<WomanVaccinationEntity>{
        return await this.womanVaccinationService.save(womanVaccination)
    }

    async update(idWomanVaccination:number,womanVaccination : UpdateWomanVaccinationDto): Promise<WomanVaccinationEntity>{
        const editedWomanVaccination = await this.womanVaccinationService.preload({idWomanVaccination,...womanVaccination})
        return await this.womanVaccinationService.save(editedWomanVaccination);
    }

    async delete(idWomanVaccination:number):Promise<WomanVaccinationEntity>{
        const removedVacciantion = await this.womanVaccinationService.findOne(idWomanVaccination)
        return await this.womanVaccinationService.remove(removedVacciantion);
    }
}
