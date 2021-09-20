/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, Options } from '@nestjs/common';
import { Like, ObjectType, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ZoneEntity } from './zone.entity';
import { AddZoneDto } from './dto/add-zone.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { ProvinceEntity } from 'src/province/province.entity';
import { async } from 'rxjs';
import { Filteredzone } from './Filteredzone.entity';

@Injectable()
export class ZoneService {
  constructor(
    @InjectRepository(ZoneEntity)
    
    private readonly zoneRepository: Repository<ZoneEntity>,
    @InjectRepository(ProvinceEntity)
    private readonly provinceRepository: Repository<ProvinceEntity>,

    @InjectRepository(Filteredzone)
    private readonly filteredRepository: Repository<Filteredzone>,
  
   
  ) {}
  async findAll(): Promise<ZoneEntity[]> {
    return await this.zoneRepository.find({ relations: ["province"] });
  }
  async findById(id: number): Promise<ZoneEntity> {
    const zone = await this.zoneRepository.findOne(id);
    if (!zone)
      throw new NotFoundException(`Cette zone de santé n'existe pas !`);
    return zone;
  }
  async add(newZone: AddZoneDto): Promise<ZoneEntity> {
    try {
      const zone = await this.zoneRepository.save(newZone);
      return zone;
    } catch (error) {
      throw new ConflictException(
        `La Zone de santé de ${newZone.labelZone} existe déjà`,
      );
    }
  }
  async update(id: number, zone: UpdateZoneDto): Promise<ZoneEntity> {
    const newZone = await this.zoneRepository.preload({ id, ...zone });
    return await this.zoneRepository.save(newZone);
  }

  async remove(id: number): Promise<ZoneEntity> {
    const zone = await this.findById(id);
    return await this.zoneRepository.remove(zone);
  }

  async getZoneByLabel(labelZone:string): Promise<Filteredzone[]> {
  const zones= await this.filteredRepository.find({ labelZone: Like(`%${labelZone.toUpperCase()}%`)});
  return zones;      
  }
}
