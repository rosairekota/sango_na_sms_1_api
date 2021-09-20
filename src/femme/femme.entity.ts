/* eslint-disable prettier/prettier */
import { timestamp } from 'rxjs';
import { CentreEntity } from 'src/centre/centre.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { ResponsibleEntity } from 'src/responsible/responsible.entity';
import { WomanInscriptionEntity } from 'src/woman-inscription/woman-inscription.entity';
import { WomanVaccinationEntity } from 'src/woman-vaccination/woman-vaccination.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('femme')
export class FemmeEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn({
    name: 'idfemme',
  })
  idwife: number;
  @Column({ name: 'nom_femme', nullable: false })
  nameWife: string;
  @Column({ name: 'post_nom_femme', nullable: false })
  lastName: string;
  @Column({ name: 'prenom_femme' })
  firstName: string;
  @Column({ name: 'date_naissance_femme', nullable: false })
  birthdate: Date;
  @Column({ name: 'adresse_femme', nullable: false })
  wifeAdress: string;
  @Column({
    name: 'telephone_femme',
    nullable: false,
    unique: true,
    length: 14,
  })
  wifePhoneNumber: string;

  @OneToMany(() => WomanInscriptionEntity, (inscription) => inscription.femme)
  inscriptions: WomanInscriptionEntity[];

  @OneToMany(() => WomanVaccinationEntity, (vaccination) => vaccination.femme)
  vaccinations: WomanVaccinationEntity[];

  @ManyToOne(() => ResponsibleEntity, (responsible) => responsible.femmes)
  responsible: ResponsibleEntity;
}
