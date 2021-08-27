/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { AireEntity } from './aire.entity';
import { AddAireDto } from './dto/add-aire.dto';
import { UpdateAireDto } from './dto/update-aire.dto';
import {FilteredAire} from './FilteredAire.entity';

@Injectable()
export class AireService {
  constructor(
    @InjectRepository(AireEntity)
    private aireRepository: Repository<AireEntity>,
    @InjectRepository(FilteredAire)
    private filteredAireRepository: Repository<FilteredAire>,
  ) {}

  async getAires(): Promise<AireEntity[]> {
    return await this.aireRepository.find({ relations: ["zone"] });
  }

  async addAire(aire: AddAireDto): Promise<AireEntity> {
    return await this.aireRepository.save(aire);
  }
  
  async updateAire(idaire:number,aire:UpdateAireDto):Promise<AireEntity>{
    const editedAire = await this.aireRepository.preload({idaire,...aire})
    return await this.aireRepository.save(editedAire);
  }

  async deleteAire(idaire:number) : Promise<AireEntity>{
    const aire = await this.aireRepository.findOne(idaire);
    return await this.aireRepository.remove(aire);
  }


  async getAiresByLabel(labelAire:string): Promise<FilteredAire[]> {
    const aires= await this.filteredAireRepository.find({ labelAire: Like(`%${labelAire.toLocaleUpperCase()}%`)});
    return aires;      
    }
}
