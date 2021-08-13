import { ChildAntigenEntity } from '../child-antigen/child-antigen.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

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
}
