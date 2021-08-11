import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { ZoneEntity } from 'src/zone/zone.entity';
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
  // @OneToMany((type) => ZoneEntity, (zone) => zone.province, {
  //   eager: true,
  //   cascade: ['insert', 'update'],
  //   nullable: true,
  // })
  // zones: ZoneEntity[];
}
