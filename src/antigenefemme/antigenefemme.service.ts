/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AntigenefemmeEntity } from './antigenefemme.entity';
import { AddAntigenWifeDto } from './dto/add_antigenWife.dto';
import { UpdateAntigenWifeDto } from './dto/update_anitgenWife.dto';

@Injectable()
export class AntigenefemmeService {
    constructor(
        @InjectRepository(AntigenefemmeEntity)
        private wifeAntigeneRepository : Repository<AntigenefemmeEntity>
    ){}

    async findAntigenes():Promise<AntigenefemmeEntity[]>{
        return await this.wifeAntigeneRepository.find();
    }

    async addAntigen(antigen:AddAntigenWifeDto):Promise<AntigenefemmeEntity>{
        return await this.wifeAntigeneRepository.save(antigen);
    }

    async updateAntigen(idAntigenWife:number,editedAntigen:UpdateAntigenWifeDto): Promise<AntigenefemmeEntity>{

        const antigen = await this.wifeAntigeneRepository.preload({idAntigenWife,...editedAntigen})
        return await this.wifeAntigeneRepository.save(antigen);
    }

    async deleteAntigen(idAntigenWife:number):Promise<AntigenefemmeEntity>{
        const deleteWife = await this.wifeAntigeneRepository.findOne(idAntigenWife);
        return await this.wifeAntigeneRepository.remove(deleteWife);
    }
}
