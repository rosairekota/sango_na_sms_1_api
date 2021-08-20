import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChildVaccinationEntity } from './child-vaccination.entity';
import { UpdateChildVaccinationDto } from './dto/update-child-vaccination.dto';
import { AddChildVaccinationDto } from './dto/add-child-vaccination.dto';

@Injectable()
export class ChildVaccinationService {
  constructor(
    @InjectRepository(ChildVaccinationEntity)
    private readonly childVaccinationRepository: Repository<ChildVaccinationEntity>,
  ) {}
  async findAll(): Promise<ChildVaccinationEntity[]> {
    return await this.childVaccinationRepository.find();
  }

  async add(entity: AddChildVaccinationDto): Promise<ChildVaccinationEntity> {
    return await this.childVaccinationRepository.save(entity);
  }

  async findById(id: number): Promise<ChildVaccinationEntity> {
    const childVaccination = await this.childVaccinationRepository.findOne(id);
    if (!childVaccination)
      throw new NotFoundException(
        "Cet enregistrement n'existe pas dans le système",
      );
    return childVaccination;
  }

  async Update(
    id: number,
    entity: Partial<UpdateChildVaccinationDto>,
  ): Promise<ChildVaccinationEntity> {
    const childVaccination = await this.childVaccinationRepository.preload({
      id,
      ...entity,
    });
    if (!childVaccination)
      throw new NotFoundException(
        "Cet enregistrement n'existe pas dans le système",
      );
    return await this.childVaccinationRepository.save(childVaccination);
  }
  async delete(id: number) {
    const childVaccination = await this.findById(id);
    if (!childVaccination)
      throw new NotFoundException(
        "Cet enregistrement n'existe pas dans le système",
      );
    return await this.childVaccinationRepository.remove(childVaccination);
  }
}
