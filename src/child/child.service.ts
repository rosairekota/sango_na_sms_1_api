import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ChildEntity } from './child.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddChildDto } from './dto/add-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';

@Injectable()
export class ChildService {
  constructor(
    @InjectRepository(ChildEntity)
    private readonly childRepository: Repository<ChildEntity>,
  ) {}

  async findAll(): Promise<ChildEntity[]> {
    return await this.childRepository.find();
  }

  async findById(id: number): Promise<ChildEntity> {
    const child = await this.childRepository.findOne(id);
    if (!child) throw new NotFoundException("Cet enregistrement n'existe pas");
    return child;
  }

  async add(newChild: AddChildDto): Promise<ChildEntity> {
    return await this.childRepository.save(newChild);
  }

  async update(
    id: number,
    child: Partial<UpdateChildDto>,
  ): Promise<ChildEntity> {
    const childUpdate = await this.childRepository.preload({ id, ...child });
    return await this.childRepository.save(childUpdate);
  }

  async delete(id: number) {
    const child = await this.findById(id);
    return await this.childRepository.remove(child);
  }
}
