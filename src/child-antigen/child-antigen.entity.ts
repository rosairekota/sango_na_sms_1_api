import { ChildPeriodEntity } from '../child-period/child-perio.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity('antigene_enfant')
export class ChildAntigenEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'intitule_ae' })
  title: string;
  @Column({ name: 'descrption_ae', type: 'text' })
  description: string;

  @ManyToOne(
    () => ChildPeriodEntity,
    (childPeriod) => childPeriod.childAntigenes,
    { cascade: ['insert', 'update'], nullable: true },
  )
  childPeriod: ChildPeriodEntity;
}
