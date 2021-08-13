/* eslint-disable prettier/prettier */
import { ManyToOne,Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { ZoneEntity } from 'src/zone/zone.entity';
import { CentreEntity } from 'src/centre/centre.entity';

@Entity('aire')
export class AireEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  idaire: number;
  @Column({ nullable: false })
  libelle_aire: string;
  @OneToMany(() => CentreEntity, (centre) => centre.aire, {
    eager: true,
    nullable: true,
    cascade: ['insert', 'update'],
  })
  centres: CentreEntity[];


  @ManyToOne(()=>ZoneEntity, (zone)=>zone.aires)
  zone:ZoneEntity
}
