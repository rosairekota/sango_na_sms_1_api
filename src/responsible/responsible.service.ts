/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { AddResponsibleDto } from './dto/add-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import { ResponsibleEntity } from './responsible.entity';

@Injectable()
export class ResponsibleService {
    constructor(
        @InjectRepository(ResponsibleEntity)
        private responsibleRepository : Repository<ResponsibleEntity>
    ){}

    
    async findAll():Promise<ResponsibleEntity[]>{
        return await this.responsibleRepository.find()
    }
    async findResponsibleByUser(user:UserEntity):Promise<ResponsibleEntity>{
      return  await this.responsibleRepository.createQueryBuilder("responsable")
      .where("userId = :id", { id: user.id })
      .getOne();
    }

    async add(responsible:AddResponsibleDto) : Promise<ResponsibleEntity>{
        return this.responsibleRepository.save(responsible);
    }

    async update(idResponsible:number,responsible:UpdateResponsibleDto):Promise<ResponsibleEntity>{
        const editingResponsible = await this.responsibleRepository.preload({idResponsible,...responsible})
        return await this.responsibleRepository.save(editingResponsible);
    }

    async delete(idResponsible:number):Promise<ResponsibleEntity>{
        const deletingResponsible = await this.responsibleRepository.findOne(idResponsible);
        return await this.responsibleRepository.remove(deletingResponsible);
    }
}
