import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { ZoneEntity } from 'src/zone/zone.entity';
import { ProfessionalEntity } from 'src/professional/professional.entity';
@Entity('province')
export class ProvinceEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100,
    unique: true,
    name: 'libelle_province',
  })
  labelProvince: string;
  @OneToMany(() => ZoneEntity, (zone) => zone.province, {
    eager: true,
  })
  zones: ZoneEntity[];

  // @ManyToMany(
  //   () => ProfessionalEntity,
  //   (professional) => professional.provinces,
  //   {
  //     cascade: true,
  //   },
  // )
  // @JoinTable()
  // professionals: ProfessionalEntity[];
}
