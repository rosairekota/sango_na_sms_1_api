import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChildAntigenEntity } from './child-antigen.entity';
import { AddchildAntigenDto } from './dto/addchild-antigen.dto';
import { UpdatechildAntigenDto } from './dto/updatechild-antigen.dto';

@Injectable()
export class ChildAntigenService {
  constructor(
    @InjectRepository(ChildAntigenEntity)
    private readonly childAntigenRepository: Repository<ChildAntigenEntity>,
  ) {}
  async findAll(): Promise<ChildAntigenEntity[]> {
    return await this.childAntigenRepository.find();
  }

  async findById(id: number): Promise<ChildAntigenEntity> {
    const entity = await this.childAntigenRepository.findOne(id);
    if (!entity) return entity;
    throw new NotFoundException("Cet enregistremet n'existe pas !");
  }
  async add(childAntigen: AddchildAntigenDto): Promise<ChildAntigenEntity> {
    return this.childAntigenRepository.save(childAntigen);
  }
  async update(
    id: number,
    childAntigen: Partial<UpdatechildAntigenDto>,
  ): Promise<ChildAntigenEntity> {
    const entity = await this.childAntigenRepository.preload({
      id,
      ...childAntigen,
    });

    return this.childAntigenRepository.save(entity);
  }
  async delete(id: number) {
    const entity = await this.findById(id);
    return await this.childAntigenRepository.remove(entity);
  }
}
