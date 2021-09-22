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
import { WomanSearchView } from './search/woman-search.entity';
import { SearchInterface } from 'src/helpers/search.interface';

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
    private  centreRepository: Repository<CentreEntity>,

    @InjectRepository(WomanSearchView)
    private readonly womanSearchViewrepository: Repository<WomanSearchView>,
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
    console.log(newWife);
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
      if (wifeRepo) {
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
      throw new Error("Une erreur inattendue s'est  produit!: " + e);
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

  async filterWifeBySubscribers(
    newEntity: SearchInterface[],
  ): Promise<WomanSearchView[]> {
    let query = 'SELECT * FROM statistique_souscription_femme';
    if (newEntity.length > 0) {
      for (let i = 0; i < newEntity.length; i++) {
        if (i === 0) {
          query += ` WHERE `;
        }
        if (typeof(newEntity[i].value)==="string") {
          query += `${newEntity[i].key}= "${newEntity[i].value}"`;
        }
        else{
          query += `${newEntity[i].key}=${newEntity[i].value} `;
        }
        if (i < newEntity.length - 1) {
          query += `AND `;
        }
      }
    }

    query += ` ORDER BY nom_femme ; `;

    console.log("queryyryryr ",query)

    return await this.womanSearchViewrepository.query(query);
  }

  async findWivesByName(
    labelName:string
  ): Promise<WomanSearchView[]> {
    const query = `SELECT * FROM statistique_souscription_femme where nom_femme like %${labelName}% ORDER BY nom_femme`;
    return await this.womanSearchViewrepository.query(query);
  }
}
