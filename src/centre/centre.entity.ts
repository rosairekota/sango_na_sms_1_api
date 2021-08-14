/* eslint-disable prettier/prettier */
import { AireEntity } from "src/aire/aire.entity";
import { FemmeEntity } from "src/femme/femme.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('centre')
export class CentreEntity {
  @PrimaryGeneratedColumn()
  idcentre: number;
  @Column({
    unique: true,
    name:"libelle_centre"
    })
  labelCentre: string;
  @Column({
      unique:true,
      name:"adresse_centre"
  })
  centreAdress:string;
  @ManyToOne(()=>AireEntity,(aire)=>aire.centres)
  aire:AireEntity;
  @ManyToMany(()=>FemmeEntity)
  femmes :FemmeEntity[]

}
