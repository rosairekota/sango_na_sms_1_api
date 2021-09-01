/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAireDto } from 'src/aire/dto/update-aire.dto';
import { Repository } from 'typeorm';
import { ChildRegistrationEntity } from './calendar.entity';
import { AddChildRegistrationDto } from './dto/add-calendar.dto';
import { UpdateChildRegistrationDto } from './dto/update-calendar.dto';

@Injectable()
export class ChildRegistrationService {
  constructor(
    @InjectRepository(ChildRegistrationEntity)
    private childRegistrationRepository: Repository<ChildRegistrationEntity>,
  ) {}

  async add(
    childRegistration: AddChildRegistrationDto,
  ): Promise<ChildRegistrationEntity> {
    return await this.childRegistrationRepository.save(childRegistration);
  }

  async delete(id: number): Promise<ChildRegistrationEntity> {
    const registration = await this.childRegistrationRepository.findOne(id);
    return await this.childRegistrationRepository.remove(registration);
  }

  async update(
    id: number,
    registration: Partial<UpdateChildRegistrationDto>,
  ): Promise<ChildRegistrationEntity> {
    const entity = await this.childRegistrationRepository.preload({
      id,
      ...registration,
    });
    return await this.childRegistrationRepository.save(entity);
  }

  async findAll(): Promise<ChildRegistrationEntity[]> {
    return await this.childRegistrationRepository.find();
  }
}
