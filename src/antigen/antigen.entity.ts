import { CalendarEntity } from 'src/calender/calendar.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('antigene')
export class AntigenEntity {
  @PrimaryGeneratedColumn({ name: 'id_antigene' })
  id: number;

  @Column({ name: 'intitule_antigene', nullable: false, unique: true })
  antigen_title: string;

  @Column({ name: 'description_antigene', nullable: true })
  antigen_description: string;
  @OneToMany(() => CalendarEntity, (calendar) => calendar.antigen)
  calendars: CalendarEntity[];
}
