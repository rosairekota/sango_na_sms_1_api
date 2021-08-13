/* eslint-disable prettier/prettier */
import { AireEntity } from "src/aire/aire.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('centre')
export class CentreEntity {
  @PrimaryGeneratedColumn()
  idcentre: number;
  @Column({
    unique: true,
    })
  libelle_centre: string;
  @Column({
      unique:true
  })
  adresse_centre:string;
  @ManyToOne(()=>AireEntity,(aire)=>aire.centres)
  aire:AireEntity;
}
