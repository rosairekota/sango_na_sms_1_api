/* eslint-disable prettier/prettier */
import { ChildPeriodEntity } from '../child-period/child-perio.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';
@Entity('antigene_enfant')
export class ChildAntigenEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'intitule_ae' })
  title: string;
  @Column({ name: 'descrption_ae', type: 'text' })
  description: string;
  childPeriod: ChildPeriodEntity;
  @OneToMany(()=>ChildVaccinationEntity,
  (vaccination)=>vaccination.antigen
  )
  vaccinations:ChildVaccinationEntity[];
}
