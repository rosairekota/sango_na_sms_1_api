/* eslint-disable prettier/prettier */
import { AntigenEntity } from 'src/antigen/antigen.entity';
import { CentreEntity } from 'src/centre/centre.entity';
import { ChildEntity } from 'src/child/child.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { PeriodEntity } from 'src/period/period.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('calendrier')
export class CalendarEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  indice:string;
  @ManyToOne(()=>PeriodEntity,(period)=>period.calendars)
  period:PeriodEntity
  @ManyToOne(()=>AntigenEntity,(antigen)=>antigen.calendars)
  antigen : AntigenEntity
}
