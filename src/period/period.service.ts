/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeriodEntity } from './period.entity';
import { AddPeriodDto } from './dto/add-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';

@Injectable()
export class PeriodService {
  constructor(
    @InjectRepository(PeriodEntity)
    private readonly PeriodRepository: Repository<PeriodEntity>,
  ) {}

  async findAll(): Promise<PeriodEntity[]> {
    return await this.PeriodRepository.find();
  }
  async findById(id: number): Promise<PeriodEntity> {
    const Period = await this.PeriodRepository.findOne(id);
    if (Period) return Period;
    throw new NotFoundException('Cette periode est inexistante');
  }
  async add(newPeriod: AddPeriodDto): Promise<PeriodEntity> {
    return await this.PeriodRepository.save(newPeriod);
  }
  async update(
    id: number,
    Period: Partial<UpdatePeriodDto>,
  ): Promise<PeriodEntity> {
    const PeriodUpdate = await this.PeriodRepository.preload({
      id,
      ...Period,
    });
    return await this.PeriodRepository.save(PeriodUpdate);
  }
  async delete(id: number) {
    const Period = await this.findById(id);
    return await this.PeriodRepository.remove(Period);
  }
}
