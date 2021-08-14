import { ChildAntigenEntity } from '../child-antigen/child-antigen.entity';
import { ChildEntity } from '../child/child.entity';
import { JoinTable } from 'typeorm';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';

@Entity('periode_enfant')
export class ChildPeriodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ name: 'duree', type: 'double' })
  duration: number;

  @OneToMany(
    () => ChildAntigenEntity,
    (childAntigene) => childAntigene.childPeriod,
    {
      eager: true,
      cascade: true,
      nullable: true,
    },
  )
  childAntigenes: ChildAntigenEntity[];

  @OneToMany(
    () => ChildVaccinationEntity,
    (vaccination) => vaccination.childPeriod,
  )
  childVaccinations: ChildVaccinationEntity[];
}
