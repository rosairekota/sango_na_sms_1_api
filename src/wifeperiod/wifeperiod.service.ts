/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddWifePerioDto } from './dto/add-wifeperiod.dto';
import { UpdateWifePerioDto } from './dto/update-wifeperiod.dto';
import { WifeperiodEntity } from './wifeperiod.entity';

@Injectable()
export class WifeperiodService {
    constructor(
        @InjectRepository(WifeperiodEntity)
        private wifePeriodRepository : Repository<WifeperiodEntity>
    )
    {}

    async findAll():Promise<WifeperiodEntity[]>{
        return await this.wifePeriodRepository.find();
    }

    async addWifePeriod(wifeperiod : AddWifePerioDto):Promise<WifeperiodEntity>{
        return await this.wifePeriodRepository.save(wifeperiod);
    }
    async updateWifePeriod(idwifeperiod: number,wifeperiod : UpdateWifePerioDto):Promise<WifeperiodEntity>{
        const editedWifePeriod = await this.wifePeriodRepository.preload({idwifeperiod,...wifeperiod});
        return await this.wifePeriodRepository.save(editedWifePeriod);
    }

    async deleteWifePeriod(idwifeperiod: number):Promise<WifeperiodEntity>{
        const editedWifePeriod = await this.wifePeriodRepository.findOne(idwifeperiod);
        return await this.wifePeriodRepository.save(editedWifePeriod);
    }
}
