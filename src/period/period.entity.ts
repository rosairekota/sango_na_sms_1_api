/* eslint-disable prettier/prettier */
import { ChildAntigenEntity } from '../child-antigen/child-antigen.entity';
import { ChildEntity } from '../child/child.entity';
import { JoinTable } from 'typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { periodCategory } from './enum/period-category.enum';
import {CalendarEntity } from 'src/calender/calendar.entity';
@Entity('periode')
export class PeriodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text',name:"libelle" })
  labelPeriod: string;

  @Column({ name: 'nombre_jour', type: 'double' })
  duration: number;
  
  @Column({type:"enum",enum: periodCategory,
    default: periodCategory.CPN,})
  categorie:string;

  @OneToMany(()=>CalendarEntity, (calendar)=>calendar.period)
  calendars: CalendarEntity[]
}
