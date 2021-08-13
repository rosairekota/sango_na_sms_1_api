/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAireDto } from 'src/aire/dto/update-aire.dto';
import { Repository } from 'typeorm';
import { AddWifeDto } from './dto/Add_Wife.dto';
import { UpdateWifeDto } from './dto/Update_wife.dto';
import { FemmeEntity } from './femme.entity';

@Injectable()
export class FemmeService {
    constructor(
        @InjectRepository(FemmeEntity)
        private wifeRepository : Repository<FemmeEntity>
    )
    {}

    async getWives():Promise<FemmeEntity[]>{
        return await this.wifeRepository.find();
    }
    async addWife(wife:AddWifeDto):Promise<FemmeEntity>{
        return await this.wifeRepository.save(wife);
    }
    async editWife(idwife : number, wife: UpdateWifeDto): Promise<FemmeEntity>{
        const editedWife =await this.wifeRepository.preload({idwife,...wife});
        return await this.wifeRepository.save(editedWife);
    }
    async deleteWife(idWife:number):Promise<FemmeEntity>{
        const deleteWife = await this.wifeRepository.findOne(idWife);
        return await this.wifeRepository.remove(deleteWife);
    }
}
