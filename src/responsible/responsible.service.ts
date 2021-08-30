/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddResponsibleDto } from './dto/add-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import { ResponsibleEntity } from './responsible.entity';

@Injectable()
export class ResponsibleService {
    constructor(
        @InjectRepository(ResponsibleEntity)
        private responsibleService : Repository<ResponsibleEntity>
    ){}

    
    async findAll():Promise<ResponsibleEntity[]>{
        return await this.responsibleService.find()
    }

    async add(responsible:AddResponsibleDto) : Promise<ResponsibleEntity>{
        return this.responsibleService.save(responsible);
    }

    async update(idResponsible:number,responsible:UpdateResponsibleDto):Promise<ResponsibleEntity>{
        const editingResponsible = await this.responsibleService.preload({idResponsible,...responsible})
        return await this.responsibleService.save(editingResponsible);
    }

    async delete(idResponsible:number):Promise<ResponsibleEntity>{
        const deletingResponsible = await this.responsibleService.findOne(idResponsible);
        return await this.responsibleService.remove(deletingResponsible);
    }
}
