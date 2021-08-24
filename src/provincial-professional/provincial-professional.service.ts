import { NotFoundException } from '@nestjs/common';
import { ConflictException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddProncialProfessionalDto } from './dto/add-proncial-professional.dto';
import { UpdateProncialProfessionalDto } from './dto/update-proncial-professional.dto';
import { ProvincialProfessionalEntity } from './provincial-professional.entity';

@Injectable()
export class ProvincialProfessionalService {
  constructor(
    @InjectRepository(ProvincialProfessionalEntity)
    private readonly ProvincialProfessionalRepository: Repository<ProvincialProfessionalEntity>,
  ) {}

  async findAll(): Promise<ProvincialProfessionalEntity[]> {
    return await this.ProvincialProfessionalRepository.find();
  }

  async add(
    entity: AddProncialProfessionalDto,
  ): Promise<ProvincialProfessionalEntity> {
    const newEntity = await this.ProvincialProfessionalRepository.save(entity);
    if (!newEntity)
      throw new ConflictException('Cet enregistrement existe deja');
    return await newEntity;
  }

  async findById(id: number): Promise<ProvincialProfessionalEntity> {
    const entity = await this.ProvincialProfessionalRepository.findOne(id);
    if (!entity)
      throw new NotFoundException('Cet enregistrement est introuvable');

    return entity;
  }

  async update(
    id: number,
    entity: Partial<UpdateProncialProfessionalDto>,
  ): Promise<ProvincialProfessionalEntity> {
    const preloadEntity = await this.ProvincialProfessionalRepository.preload({
      id,
      ...entity,
    });
    if (!preloadEntity) throw new NotFoundException('Contenu inexistant');
    return await this.ProvincialProfessionalRepository.save(preloadEntity);
  }

  async delete(id: number) {
    const entity = await this.findById(id);
    if (!entity) throw new NotFoundException('Contenu inexistant');
    return await this.ProvincialProfessionalRepository.remove(entity);
  }
}
