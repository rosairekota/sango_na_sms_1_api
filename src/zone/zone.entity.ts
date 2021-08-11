import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import TimesTempEntity from '../helpers/timestemp.entity';
@Entity('zone')
export class ZoneEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'libelle_zone',
    type: 'varchar',
    length: 100,
    unique: true,
  })
  labelZone: string;
}
