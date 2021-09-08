/* eslint-disable prettier/prettier */
import { UserEntity } from 'src/auth/user.entity';
import { ChildEntity } from 'src/child/child.entity';
import { FemmeEntity } from 'src/femme/femme.entity';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { responsibleSexe } from './enum/responsible-sexe.enum';

@Entity('responsable')
export class ResponsibleEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn({ name: 'idresponsable' })
  idResponsible: number;
  @Column({ name: 'nom_responsable', nullable: false })
  responsibleName: string;
  @Column({ name: 'post_nom_responsable', nullable: false })
  responsibleLastName: string;
  @Column({ name: 'prenom_responsable' })
  firstNameResponsible: string;
  @Column({ name: 'adresse_responsable' })
  responsibleAdress: string;
  @Column({ name: 'numero_telephone_responsable', length: 14 })
  responsiblePhoneNumer: string;
  @Column({
    name: 'sexe',
    type: 'enum',
    nullable: false,
    enum: responsibleSexe,
    default: responsibleSexe.Homme,
  })
  sexe: string;
  @OneToMany(() => FemmeEntity, (femme) => femme.responsible)
  femmes: FemmeEntity[];

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
  @OneToMany(() => ChildEntity, (child) => child.responsible, {
    eager: true,
    nullable: false,
  })
  children: ChildEntity[];
}
