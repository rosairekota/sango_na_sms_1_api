/* eslint-disable prettier/prettier */
import { AireEntity } from 'src/aire/aire.entity';
import { ProvinceEntity } from 'src/province/province.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import TimesTempEntity from '../helpers/timestemp.entity';
@Entity('zone')
export class ZoneEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    name: 'libelle_zone',
    type: 'varchar',
    length: 100,
  })
  labelZone: string;

  @ManyToOne(() => ProvinceEntity, (province) => province.zones, {
    cascade: ["update","insert","remove"],
    nullable: false,
  })
  province: ProvinceEntity;

  @OneToMany(() => AireEntity, (aire) => aire.zone, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  aires: Array<AireEntity>;
}
