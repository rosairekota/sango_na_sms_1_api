import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionalEntity } from './professional.entity';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { AddProfessionalDto } from './dto/add-professional.dto';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(ProfessionalEntity)
    private readonly professionalRepository: Repository<ProfessionalEntity>,
  ) {}

  async findAll(): Promise<ProfessionalEntity[]> {
    return await this.professionalRepository.find();
  }
  async findById(id: number): Promise<ProfessionalEntity> {
    const professional = await this.professionalRepository.findOne(id);
    if (!professional)
      throw new NotFoundException(
        "Ce professionel n'existe pas dans le système",
      );
    return professional;
  }
  async create(
    newProfessional: AddProfessionalDto,
  ): Promise<ProfessionalEntity> {
    return await this.professionalRepository.save(newProfessional);
  }
  async update(
    id: number,
    entity: Partial<UpdateProfessionalDto>,
  ): Promise<ProfessionalEntity> {
    const professional = await this.professionalRepository.preload({
      id,
      ...entity,
    });
    if (!professional)
      throw new NotFoundException(
        "Ce professionel n'existe pas dans le système",
      );
    return await this.professionalRepository.save(professional);
  }
  async delete(id: number) {
    const professional = await this.findById(id);
    if (!professional)
      throw new NotFoundException(
        "Ce professionel n'existe pas dans le système",
      );
    return await this.professionalRepository.remove(professional);
  }
}
