import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CenterProfessionalEntity } from './center-professional.entity';
import { AddCenterProfessionalDto } from './dto/add-center-professional.dto';
import { UpdateCenterProfessionalDto } from './dto/update-center-professional.dto';
@Injectable()
export class CenterProfessionalService {
  constructor(
    @InjectRepository(CenterProfessionalEntity)
    private readonly centerProfessionalRepo: Repository<CenterProfessionalEntity>,
  ) {}

  async findAll(): Promise<CenterProfessionalEntity[]> {
    return await this.centerProfessionalRepo.find();
  }

  async add(
    entity: AddCenterProfessionalDto,
  ): Promise<CenterProfessionalEntity> {
    const newEntity = await this.centerProfessionalRepo.save(entity);
    if (!newEntity)
      throw new ConflictException('Cet enregistrement existe deja');
    return await newEntity;
  }

  async findById(id: number): Promise<CenterProfessionalEntity> {
    const entity = await this.centerProfessionalRepo.findOne(id);
    if (!entity)
      throw new NotFoundException('Cet enregistrement est introuvable');

    return entity;
  }

  async update(
    id: number,
    entity: Partial<UpdateCenterProfessionalDto>,
  ): Promise<CenterProfessionalEntity> {
    const preloadEntity = await this.centerProfessionalRepo.preload({
      id,
      ...entity,
    });
    if (!preloadEntity) throw new NotFoundException('Contenu inexistant');
    return await this.centerProfessionalRepo.save(preloadEntity);
  }

  async delete(id: number) {
    const entity = await this.findById(id);
    if (!entity) throw new NotFoundException('Contenu inexistant');
    return await this.centerProfessionalRepo.remove(entity);
  }
}
