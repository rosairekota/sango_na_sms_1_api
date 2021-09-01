import { AntigenEntity } from 'src/antigen/antigen.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { PeriodEntity } from 'src/period/period.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('calendrier')
export class CalendarEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  indice: string;

  @ManyToOne(() => PeriodEntity, (period) => period.calendars)
  @JoinColumn({ name: 'periode_id' })
  period: PeriodEntity;

  @ManyToOne(() => AntigenEntity, (antigen) => antigen.calendars)
  @JoinColumn({ name: 'antigen_id' })
  antigen: AntigenEntity;
}
