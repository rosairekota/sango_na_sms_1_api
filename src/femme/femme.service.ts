/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
