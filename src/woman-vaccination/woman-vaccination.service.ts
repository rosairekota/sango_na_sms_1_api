/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchInterface } from 'src/helpers/search.interface';
import { Repository } from 'typeorm';
import { AddWomanVaccinationDto } from './dto/add-woman-vaccination.dto';
import { UpdateWomanVaccinationDto } from './dto/update-woman-vaccination.dto';
import WomanVaccinationView from './search/woman-vaccination-search.entity';
import { WomanVaccinationEntity } from './woman-vaccination.entity';

@Injectable()
export class WomanVaccinationService {
  constructor(
    @InjectRepository(WomanVaccinationEntity)
    private womanVaccinationService: Repository<WomanVaccinationEntity>,
    @InjectRepository(WomanVaccinationView)
    private womanVaccinationViewrepository: Repository<WomanVaccinationView>,
  ) {}

  async findAll(): Promise<WomanVaccinationEntity[]> {
    return await this.womanVaccinationService.find();
  }

  async add(
    womanVaccination: AddWomanVaccinationDto,
  ): Promise<WomanVaccinationEntity> {
    return await this.womanVaccinationService.save(womanVaccination);
  }

  async update(
    idWomanVaccination: number,
    womanVaccination: UpdateWomanVaccinationDto,
  ): Promise<WomanVaccinationEntity> {
    const editedWomanVaccination = await this.womanVaccinationService.preload({
      idWomanVaccination,
      ...womanVaccination,
    });
    return await this.womanVaccinationService.save(editedWomanVaccination);
  }

  async delete(idWomanVaccination: number): Promise<WomanVaccinationEntity> {
    const removedVacciantion = await this.womanVaccinationService.findOne(
      idWomanVaccination,
    );
    return await this.womanVaccinationService.remove(removedVacciantion);
  }

  async filterWomanByVaccinations(
    newEntity: SearchInterface[],
  ): Promise<WomanVaccinationView[]> {
    let query = 'SELECT * FROM statistique_vaccination_femme';

    if (newEntity.length > 0) {
      for (let i = 0; i < newEntity.length; i++) {
        if (i === 0) {
          query += ` WHERE `;
        }
        query += `${newEntity[i].key}=${newEntity[i].value} `;
        if (i < newEntity.length - 1) {
          query += `AND `;
        }
      }

      query += ` ORDER BY nom_femme ; `;
    }

    return await this.womanVaccinationViewrepository.query(query);
  }
}
