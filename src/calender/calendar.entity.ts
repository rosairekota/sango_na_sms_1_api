/* eslint-disable prettier/prettier */
import { CentreEntity } from 'src/centre/centre.entity';
import { ChildEntity } from 'src/child/child.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('calendrier')
export class ChildRegistrationEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  indice:string;
  @ManyToOne(())

 
}
