/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { periodCategory } from './enum/period-category.enum';
import { CalendarEntity } from 'src/calendar/calendar.entity';

@Entity('periode')
export class PeriodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', name: 'libelle' })
  labelPeriod: string;

  @Column({ name: 'nombre_jour', type: 'double' })
  duration: number;

<<<<<<< HEAD
  @OneToMany(()=>CalendarEntity, (calendar)=>calendar.period,{
    eager: true,
  })
  calendars: CalendarEntity[]
=======
  @Column({ type: 'enum', enum: periodCategory, default: periodCategory.CPN })
  categorie: string;

  @OneToMany(() => CalendarEntity, (calendar) => calendar.period, {
    cascade: true,
  })
  calendars: CalendarEntity[];
>>>>>>> 170b1def70629f0402855f2ae29671948cf11f29
}
