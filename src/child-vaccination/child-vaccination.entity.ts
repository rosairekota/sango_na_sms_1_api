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
<<<<<<< HEAD
// import { ChildPeriodEntity } from 'src/period/period.entity';
// import { ChildAntigenEntity } from 'src/antigen/child-antigen.entity';
=======
>>>>>>> 4539f70fa5f8a6cf4cdefc506e44b19ceb32c2a6
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
  })
  notificate: string;

  @Column({ name: 'date_notification' })
  notificationDate: Date;

  @ManyToOne(() => ChildEntity, (child) => child.childVaccinations)
  @JoinColumn({ name: 'enfant_id' })
  child: ChildEntity;
<<<<<<< HEAD
  // @ManyToOne(()=>ChildAntigenEntity,(childAntigen)=>childAntigen.vaccinations)
  // antigen: ChildAntigenEntity;
@ManyToOne(()=>CentreEntity,
(centre)=>centre.vaccinations
)
centre : CentreEntity;
=======
>>>>>>> 4539f70fa5f8a6cf4cdefc506e44b19ceb32c2a6

  @ManyToOne(() => CalendarEntity, (calendar) => calendar.vaccinations)
  calendar: CalendarEntity;

  @ManyToOne(() => CentreEntity, (centre) => centre.vaccinations)
  centre: CentreEntity;
}
