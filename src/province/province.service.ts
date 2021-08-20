import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUppercase, IS_UPPERCASE } from 'class-validator';
import { Repository } from 'typeorm';
import { AddProvinceDto } from './dto/add-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ProvinceEntity } from './province.entity';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(ProvinceEntity)
    private provinceRepository: Repository<ProvinceEntity>,
  ) {}

  // Add provinces
  async addProvince(province: AddProvinceDto): Promise<ProvinceEntity> {
    const newProvince = this.provinceRepository.create(province);
    try {
      return await this.provinceRepository.save(newProvince);
    } catch (error) {
      throw new ConflictException(
        `La province de ${province.labelProvince} existe déjà`,
      );
    }
  }
  // Get all provinces
  async getProvince(): Promise<ProvinceEntity[]> {
    return await this.provinceRepository.find();
  }

  // Get province by id
  async getProvinceById(id: number): Promise<ProvinceEntity> {
    const province = await this.provinceRepository.findOne(id);
    if (!province) {
      throw new NotFoundException(
        `La province dont l'id est ${id} n'existe pas`,
      );
    }
    return province;
  }
  // Update province
  async updateProvince(
    id: number,
    province: UpdateProvinceDto,
  ): Promise<ProvinceEntity> {
    const newProvince = await this.provinceRepository.preload({
      id,
      ...province,
    });
    if (!newProvince) {
      throw new NotFoundException(
        `La province dont l'id est ${id} n'existe pas`,
      );
    }
    return await this.provinceRepository.save(newProvince);
  }

  // Delete province
  async removeProvince(id: number) :Promise<ProvinceEntity>{
    const provinceToRemove = await this.provinceRepository.findOne(id);

    if (!provinceToRemove) {
      throw new NotFoundException(
        `La province dont l'id est ${id} n'existe pas`,
      );
    }
    return await this.provinceRepository.remove(provinceToRemove);
  }
}
