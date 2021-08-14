/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddWomanInscriptionDto } from './dto/add-woman-inscription.dto';
import { UpdateWomanInscriptionDto } from './dto/update-woman-inscription.dto copy';
import { WomanInscriptionEntity } from './woman-inscription.entity';

@Injectable()
export class WomanInscriptionService {
    
    constructor(
        @InjectRepository(WomanInscriptionEntity)
        private womanInscriptionService : Repository<WomanInscriptionEntity>
    ){}

    async add(inscription:AddWomanInscriptionDto): Promise<WomanInscriptionEntity>{
        return  await this.womanInscriptionService.save(inscription);
    }
    async update(idWomanInscription :number,inscription:UpdateWomanInscriptionDto): Promise<WomanInscriptionEntity>{
        const editedInscription = await this.womanInscriptionService.preload({idWomanInscription,...inscription})
        return  await this.womanInscriptionService.save(editedInscription);
    }

    async delete(id:number) : Promise<WomanInscriptionEntity>{
        const editedInscription = await this.womanInscriptionService.findOne(id);
        return await this.womanInscriptionService.remove(editedInscription);
    }

    async findAll():Promise<WomanInscriptionEntity[]>{
        return await this.womanInscriptionService.find();
    }
}
