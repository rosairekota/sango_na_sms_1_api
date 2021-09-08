import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import TimesTempEntity from '../helpers/timestemp.entity';
import { ChildVaccinationEntity } from '../child-vaccination/child-vaccination.entity';
import { ChildRegistrationEntity } from 'src/child-registration/child-registration.entity';
import { ResponsibleEntity } from 'src/responsible/responsible.entity';

@Entity('enfant')
export class ChildEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom' })
  name: string;
  @Column({ name: 'postnom' })
  lastName: string;

  @Column({ name: 'prenom' })
  firstName: string;

  @Column({ name: 'sexe' })
  gender: string;

  @Column({ name: 'lieu_naissance' })
  birthPlace: string;

  @Column({ name: 'date_naissance', type: 'date' })
  birthDate: Date;

  @Column({ name: 'naissance_maison', type: 'bool' })
  homeBirth: boolean;

  @Column({ name: 'adress_enfant' })
  childAdress: string;

  @Column({ name: 'nom_mere' })
  motherName: string;

  @Column({ name: 'date_naissance_mere', type: 'date' })
  dateOfBirthMother: Date;

  @Column({ name: 'telephone_mere' })
  motherPhone: string;

  @ManyToOne(() => ResponsibleEntity, (responsible) => responsible.childs)
  @JoinColumn({ name: 'responsible_id' })
  responsible: ResponsibleEntity;

  @OneToMany(
    () => ChildVaccinationEntity,
    (childVaccination) => childVaccination.child,
    {
      cascade: true,
    },
  )
  childVaccinations: ChildVaccinationEntity[];

  @OneToMany(
    () => ChildRegistrationEntity,
    (childRegistration) => childRegistration.child,
    {
      cascade: true,
    },
  )
  registrations: ChildRegistrationEntity[];
}
