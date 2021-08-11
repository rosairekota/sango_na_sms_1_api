import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ZoneEntity } from './zone.entity';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(ZoneEntity)
    private readonly zoneRepository: Repository<ZoneEntity>,
  ) {}
  async findAll(): Promise<ZoneEntity[]> {
    return await this.zoneRepository.find();
  }
  async findById(id: number): Promise<ZoneEntity> {
    return await this.zoneRepository.findOne(id);
  }
}
