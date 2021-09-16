/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChildVaccinationEntity } from './child-vaccination.entity';
import { UpdateChildVaccinationDto } from './dto/update-child-vaccination.dto';
import { AddChildVaccinationDto } from './dto/add-child-vaccination.dto';
import { SearchInterface } from 'src/helpers/search.interface';
import ChildVaccinationView from './search/child-vaccination-search.entity';

@Injectable()
export class ChildVaccinationService {
  constructor(
    @InjectRepository(ChildVaccinationEntity)
    private readonly childVaccinationRepository: Repository<ChildVaccinationEntity>,
  ) {}
  async findAll(): Promise<ChildVaccinationEntity[]> {
    return await this.childVaccinationRepository.find();
  }

  async add(
    childVaccination: AddChildVaccinationDto,
  ): Promise<ChildVaccinationEntity> {
    return await this.childVaccinationRepository.save(childVaccination);
    // const antigens = await this.childAntigenRepository.find();
    // const connection = getConnection();
    // const queryRunner = connection.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();

    // try {
    //   for await (const childAntigen of antigens) {
    //     const antigenEtity = await this.childAntigenRepository.create({...childAntigen});
    //     const vaccination = await this.childVaccinationRepository.create({...childVaccination})
    //           vaccination.antigen= antigenEtity;
    //           await queryRunner.manager.save(vaccination);
    //           await queryRunner.commitTransaction();
    //   }

    // } catch (error) {
    //   await queryRunner.rollbackTransaction();
    //   throw new Error('Une erreur est survenue');

    // }
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

  async filterChildsByVaccinations(
    newChildVaccinationView: SearchInterface[],
  ): Promise<ChildVaccinationView[]> {
    let query = 'SELECT * FROM statistique_vaccination_enfant';
    if (newChildVaccinationView.length > 0) {
      for (let i = 0; i < newChildVaccinationView.length; i++) {
        if (i === 0) {
          query += ` WHERE `;
        }
        query += `${newChildVaccinationView[i].key}=${newChildVaccinationView[i].value} `;
        if (i < newChildVaccinationView.length - 1) {
          query += `AND `;
        }
      }

      query += ` ORDER BY nom ; `;
    }

    return await this.childVaccinationRepository.query(query);
  }
}
