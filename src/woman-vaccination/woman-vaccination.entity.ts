/* eslint-disable prettier/prettier */
import { AntigenEntity } from 'src/antigen/antigen.entity';
import { FemmeEntity } from 'src/femme/femme.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { estNotifie } from './enum/etat-notification.enum';

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
  @OneToMany(() => FemmeEntity, (femme) => femme.vaccinations)
  femme: FemmeEntity;
  @OneToMany(() => AntigenEntity, (antigen) => antigen.calendars)
  antigen: AntigenEntity;
}
