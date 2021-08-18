import { ResorEnum } from './enum/resort.enum';

import { ProvinceEntity } from 'src/province/province.entity';
import { CentreEntity } from 'src/centre/centre.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity('professionel')
export class ProfessionalEntity {
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

  @Column({ name: 'adresse' })
  address: string;

  @Column({ name: 'telephone' })
  telephon: string;

  @Column({
    name: 'resort',
    type: 'enum',
    enum: ResorEnum,
    default: ResorEnum.national,
  })
  resort: string;

  @ManyToMany(() => ProvinceEntity, (province) => province.professionals, {
    cascade: true,
  })
  @JoinTable()
  provinces: ProvinceEntity[];
  @ManyToMany(() => CentreEntity, (centre) => centre.professionals, {
    cascade: true,
  })
  @JoinTable()
  centres: CentreEntity[];
}
