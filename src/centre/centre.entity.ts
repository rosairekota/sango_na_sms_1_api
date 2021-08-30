/* eslint-disable prettier/prettier */
import { AireEntity } from 'src/aire/aire.entity';
import { ChildRegistrationEntity } from 'src/child-registration/child-registration.entity';
import { ProfessionalEntity } from 'src/professional/professional.entity';
import { WomanInscriptionEntity } from 'src/woman-inscription/woman-inscription.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('centre')
export class CentreEntity {
  @PrimaryGeneratedColumn()
  idcentre: number;
  @Column({
    unique: true,
    name: 'libelle_centre',
  })
  labelCentre: string;
  @Column({
    unique: true,
    name: 'adresse_centre',
  })
  centreAdress: string;
  @ManyToOne(() => AireEntity, (aire) => aire.centres)
  aire: AireEntity;

  @OneToMany(() => WomanInscriptionEntity, (inscription) => inscription.centre)
  inscriptions: WomanInscriptionEntity[];
  @OneToMany(
    () => ChildRegistrationEntity,
    (registration) => registration.centre,
  )
  childRegistrations: ChildRegistrationEntity[];
  // @ManyToMany(
  //   () => ProfessionalEntity,
  //   (professional) => professional.centres,
  //   {
  //     cascade: true,
  //   },
  // )
  // @JoinTable()
  // professionals: ProfessionalEntity[];
}
