/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ZoneEntity } from './zone.entity';
import { AddZoneDto } from './dto/add-zone.dto';
import { NotFoundException } from '@nestjs/common';

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
    const zone = await this.zoneRepository.findOne(id);
    if (!zone)
      throw new NotFoundException(`Cette zone de santé n'existe pas !`);
    return zone;
  }
  async add(newZone: AddZoneDto): Promise<ZoneEntity> {
    try {
      return await this.zoneRepository.save(newZone);
    } catch (error) {
      throw new ConflictException(
        `La Zone de santé de ${newZone.labelZone} existe déjà`,
      );
    }
  }
  async update(id: number, zone: AddZoneDto): Promise<ZoneEntity> {
    const newZone = await this.zoneRepository.preload({ id, ...zone });
    return await this.zoneRepository.save(newZone);
  }

  async remove(id: number): Promise<ZoneEntity> {
    const zone = await this.findById(id);
    return await this.zoneRepository.remove(zone);
  }
}
