import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AntigenEntity } from './antigen.entity';
import { AddAntigenDto } from './dto/add-antigen.dto';
import { UpdateAntigenDto } from './dto/update-antigen.dto';

@Injectable()
export class AntigenService {
  constructor(
    @InjectRepository(AntigenEntity)
    private antigenRepository: Repository<AntigenEntity>,
  ) {}

  async findAll(): Promise<AntigenEntity[]> {
    return await this.antigenRepository.find();
  }

  async add(antigen: AddAntigenDto): Promise<AntigenEntity> {
    console.log(antigen)
    return await this.antigenRepository.save(antigen);
  }

  async findById(id: number): Promise<AntigenEntity> {
    return await this.antigenRepository.findOne(id);
  }

  async update(
    id: number,
    editedAntigen: UpdateAntigenDto,
  ): Promise<AntigenEntity> {
    const antigen = await this.antigenRepository.preload({
      id,
      ...editedAntigen,
    });
    return await this.antigenRepository.save(antigen);
  }

  async delete(id: number): Promise<AntigenEntity> {
    const antigen = await this.antigenRepository.findOne(id);
    return await this.antigenRepository.remove(antigen);
  }
}
