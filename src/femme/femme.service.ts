/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { AddWifeDto } from './dto/Add-Wife.dto';
import { UpdateWifeDto } from './dto/Update-wife.dto';
import { FemmeEntity } from './femme.entity';
import { ResponsibleEntity } from '../responsible/responsible.entity';
import { WomanInscriptionEntity } from 'src/woman-inscription/woman-inscription.entity';
import { CentreEntity } from 'src/centre/centre.entity';

@Injectable()
export class FemmeService {
  constructor(
    @InjectRepository(FemmeEntity)
    private wifeRepository: Repository<FemmeEntity>,
    @InjectRepository(ResponsibleEntity)
    private responsibleRepository: Repository<ResponsibleEntity>,
    @InjectRepository(WomanInscriptionEntity)
    private womanInscriptionRepository: Repository<WomanInscriptionEntity>,
    @InjectRepository(CentreEntity)
    private readonly centreRepository: Repository<CentreEntity>,
    private connection: Connection,
  ) {}

  async getWives(): Promise<FemmeEntity[]> {
    return await this.wifeRepository.find();
  }
  async addWife(newWife: AddWifeDto): Promise<FemmeEntity> {
    const {
      nameWife,
      lastName,
      firstName,
      birthdate,
      wifeAdress,
      wifePhoneNumber,
      centre,
      responsible,
      woman_inscription_state,
    } = newWife;
    const centreEntity = this.centreRepository.create({ ...centre });
    const respoEntity = this.responsibleRepository.create({ ...responsible });
    const centreRepo = await this.centreRepository.findOne(centreEntity);
    const responsibleRepo = await this.responsibleRepository.findOne(
      respoEntity,
    );
    const wifeEntity = await this.wifeRepository.create({
      nameWife,
      lastName,
      firstName,
      birthdate,
      wifeAdress,
      wifePhoneNumber,
    });
    wifeEntity.responsible = responsibleRepo;

    // Transaction:
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const wifeRepo = await queryRunner.manager.save(wifeEntity);
      if (wifeRepo && centreRepo) {
        const womanInscriptionEntity = this.womanInscriptionRepository.create({
          woman_inscription_state,
        });
        womanInscriptionEntity.centre = centreRepo;
        womanInscriptionEntity.femme = wifeRepo;
        await queryRunner.manager.save(womanInscriptionEntity);
        await queryRunner.commitTransaction();
      }
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new Error("Une erreur inattendue s'est  produit!");
    }

    return null;
  }
  async editWife(idwife: number, wife: UpdateWifeDto): Promise<FemmeEntity> {
    const editedWife = await this.wifeRepository.preload({ idwife, ...wife });
    return await this.wifeRepository.save(editedWife);
  }
  async deleteWife(idWife: number): Promise<FemmeEntity> {
    const deleteWife = await this.wifeRepository.findOne(idWife);
    return await this.wifeRepository.remove(deleteWife);
  }
}
