/* eslint-disable prettier/prettier */
import { CentreEntity } from 'src/centre/centre.entity';
import { ChildEntity } from 'src/child/child.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChildRegistrationSexe } from './enum/child-registration-sex.enum';

@Entity('inscription_enfant')
export class ChildRegistrationEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'etat_inscription',
    type: 'enum',
    enum: ChildRegistrationSexe,
    default: ChildRegistrationSexe.Masculin,
  })
  registrationState: string;
  @ManyToOne(() => CentreEntity, (centre) => centre.childRegistrations)
  centre: CentreEntity;

  @ManyToOne(() => ChildEntity, (child) => child.registrations)
  child: ChildEntity;
}
