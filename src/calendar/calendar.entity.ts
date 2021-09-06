/* eslint-disable prettier/prettier */
import { AntigenEntity } from 'src/antigen/antigen.entity';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { PeriodEntity } from 'src/period/period.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('calendrier')
export class CalendarEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:null})
  indice: string;

<<<<<<< HEAD
  @ManyToOne(() => PeriodEntity, (period) => period.calendars,{
    cascade: ["update","insert","remove"],
    nullable: false,
  })
  period: PeriodEntity;

  @ManyToOne(() => AntigenEntity, (antigen) => antigen.calendars,{
    cascade: ["update","insert","remove"],
    nullable: false,
  })
=======
  @ManyToOne(() => PeriodEntity, (period) => period.calendars)
  period: PeriodEntity;

  @ManyToOne(() => AntigenEntity, (antigen) => antigen.calendars)
>>>>>>> 170b1def70629f0402855f2ae29671948cf11f29
  antigen: AntigenEntity;

  @OneToMany(
    () => ChildVaccinationEntity,
    (vaccination) => vaccination.calendar,
  )
  vaccinations: ChildVaccinationEntity[];
}
