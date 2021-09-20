/* eslint-disable prettier/prettier */
import { FemmeEntity } from 'src/femme/femme.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { estNotifie } from './enum/etat-notification.enum';
import { ManyToOne } from 'typeorm';
import { CalendarEntity } from 'src/calendar/calendar.entity';
import { CentreEntity } from '../centre/centre.entity';

@Entity('vaccination_femme')
export class WomanVaccinationEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn({
    name: 'id_vaccination_femme',
  })
  idWomanVaccination: number;

  @Column({ name: 'date_prevue', nullable: false })
  plannedDate: Date;

  @Column({ name: 'date_recue' })
  receivedDate: Date;

  @Column({
    name: 'est_notifie',
    type: 'enum',
    enum: estNotifie,
    default: estNotifie.NON,
  })
  IsNotified: string;

  @Column({ name: 'date_notification' })
  notificationDate: Date;

  @ManyToOne(() => FemmeEntity, (femme) => femme.vaccinations)
  femme: FemmeEntity;
  @ManyToOne(() => CalendarEntity)
  calendar: CalendarEntity;

  @ManyToOne(() => CentreEntity)
  centre: CentreEntity;
}
