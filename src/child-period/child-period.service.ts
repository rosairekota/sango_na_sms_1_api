import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProvinceDto } from 'src/province/dto/update-province.dto';
import { Repository } from 'typeorm';
import { ChildPeriodEntity } from './child-perio.entity';
import { AddChildPeriodDto } from './dto/add-child-period.dto';
import { UpdateChildPeriodDto } from './dto/update-child.dto';

@Injectable()
export class ChildPeriodService {
  constructor(
    @InjectRepository(ChildPeriodEntity)
    private readonly childPeriodRepository: Repository<ChildPeriodEntity>,
  ) {}

  async findAll(): Promise<ChildPeriodEntity[]> {
    return await this.childPeriodRepository.find();
  }
  async findById(id: number): Promise<ChildPeriodEntity> {
    const childPeriod = await this.childPeriodRepository.findOne(id);
    if (childPeriod) return childPeriod;
    throw new NotFoundException('Cette periode est inexistante');
  }
  async add(newChildPeriod: AddChildPeriodDto): Promise<ChildPeriodEntity> {
    return await this.childPeriodRepository.save(newChildPeriod);
  }
  async update(
    id: number,
    childPeriod: Partial<UpdateChildPeriodDto>,
  ): Promise<ChildPeriodEntity> {
    const childPeriodUpdate = await this.childPeriodRepository.preload({
      id,
      ...childPeriod,
    });
    return await this.childPeriodRepository.save(childPeriodUpdate);
  }
  async delete(id: number) {
    const childPeriod = await this.findById(id);
    return await this.childPeriodRepository.remove(childPeriod);
  }
}
