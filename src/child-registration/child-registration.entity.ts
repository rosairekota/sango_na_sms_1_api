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
import { AddChildRegistration } from './enum/add-child-registration.enum';
import { ChildRegistrationType } from './enum/child-registration-type.enum copy';

@Entity('inscription_enfant')
export class ChildRegistrationEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'etat_inscription',
    type: 'enum',
    enum: AddChildRegistration,
    default: AddChildRegistration.ACTIF,
  })
  registrationState: string;
  @ManyToOne(() => CentreEntity, (centre) => centre.childRegistrations)
  centre: CentreEntity;

  @ManyToOne(() => ChildEntity, (child) => child.registrations)
  child: ChildEntity;

  @Column({name:"type", type: 'enum',
  enum: ChildRegistrationType,
  default: ChildRegistrationType.BASE})
  typeRegistration: string
}
