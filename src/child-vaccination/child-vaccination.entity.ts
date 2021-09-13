/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { NotificationEnum } from './enum/notification.enum';
import { ChildEntity } from '../child/child.entity';
import { CentreEntity } from 'src/centre/centre.entity';
import { CalendarEntity } from 'src/calendar/calendar.entity';
@Entity('vaccination_enfant')
export class ChildVaccinationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'date_prevue' })
  dueDate: Date;

  @Column({ name: 'date_recu' })
  receivedDate: Date;

  @Column({
    name: 'notifier',
    type: 'enum',
    enum: NotificationEnum,
    default: NotificationEnum.YES,
    nullable:true
  })
  notificate: string;

  @Column({ name: 'date_notification',nullable:true })
  notificationDate: Date;

  @ManyToOne(() => ChildEntity, (child) => child.childVaccinations)
  @JoinColumn({ name: 'enfant_id' })
  child: ChildEntity;

  @ManyToOne(() => CalendarEntity, (calendar) => calendar.vaccinations)
  calendar: CalendarEntity;

  @ManyToOne(() => CentreEntity, (centre) => centre.vaccinations)
  centre: CentreEntity;
}
