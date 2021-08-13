/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AireEntity } from './aire.entity';
import { AddAireDto } from './dto/add-aire.dto';
import { UpdateAireDto } from './dto/update-aire.dto';

@Injectable()
export class AireService {
  constructor(
    @InjectRepository(AireEntity)
    private aireRepository: Repository<AireEntity>,
  ) {}

  async getAires(): Promise<AireEntity[]> {
    return await this.aireRepository.find();
  }

  async addAire(aire: AddAireDto): Promise<AireEntity> {
    return await this.aireRepository.save(aire);
  }
  
  async updateAire(idaire:number,aire:UpdateAireDto):Promise<AireEntity>{
    const editedAire = await this.aireRepository.preload({idaire,...aire})
    return await this.aireRepository.save(editedAire);
  }
}
