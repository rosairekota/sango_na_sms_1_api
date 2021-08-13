/* eslint-disable prettier/prettier */
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'rxjs';
import { Repository } from 'typeorm';
import { CentreEntity } from './centre.entity';
import { AddCentreDto } from './dto/add-centre.dto';
import { UpdateCentreDto } from './dto/update-centre.dto';

@Injectable()
export class CentreService {
  constructor(
    @InjectRepository(CentreEntity)
    private readonly centreRepository: Repository<CentreEntity>,
    ){}
 
  async addCentre(addCentreDto: AddCentreDto): Promise<CentreEntity> {
    const centre = this.centreRepository.create(addCentreDto);
    try {
      return await this.centreRepository.save(centre);
    } catch (error) {
           throw new ConflictException(`le centre ${centre.libelle_centre} existe déjà`)   
        }
    }
 
    async getAllCenters():Promise<CentreEntity[]>{
    return await this.centreRepository.find();
    }

    // async getCentresByLibelle(libelle:string) : Promise<CentreEntity>{
     
    //   const qb =  this.centreRepository.createQueryBuilder("centre");

    //  return await qb.select("idcentre,libelle_centre,aire").where(`libelle_centre LIKE :q`,{q: `%${libelle}%`}).getMany();
    // }
   async update(idcentre:number,centre:UpdateCentreDto){
    const editedCentre = await this.centreRepository.preload({idcentre,...centre});
    return await this.centreRepository.save(editedCentre);
   }

   async remove(idcentre:number):Promise<CentreEntity>{
    const centre = await this.centreRepository.findOne(idcentre);
    return await this.centreRepository.remove(centre);
   }
}
