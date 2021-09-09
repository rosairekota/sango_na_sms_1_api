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
    private responsibleRepo: Repository<ResponsibleEntity>,
    @InjectRepository(WomanInscriptionEntity)
    private WomanInscriptionEntity: Repository<WomanInscriptionEntity>,
    @InjectRepository(CentreEntity)
    private readonly centreRepository: Repository<CentreEntity>,
    private connection: Connection,
  ) {}

  async getWives(): Promise<FemmeEntity[]> {
    return await this.wifeRepository.find();
  }
  async addWife(wife: AddWifeDto): Promise<FemmeEntity> {
    return await this.wifeRepository.save(wife);
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
