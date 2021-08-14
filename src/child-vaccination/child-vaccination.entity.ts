import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { NotificationEnum } from './enum/notification.enum';
import { ChildEntity } from '../child/child.entity';
import { ChildPeriodEntity } from 'src/child-period/child-perio.entity';
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
  notification: string;

  @Column({ name: 'date_notification' })
  notificationDate: Date;

  @ManyToOne(() => ChildEntity, (child) => child.childVaccinations)
  child: ChildEntity;

  @ManyToOne(
    () => ChildPeriodEntity,
    (childPeriod) => childPeriod.childVaccinations,
  )
  childPeriod: ChildPeriodEntity;
}
