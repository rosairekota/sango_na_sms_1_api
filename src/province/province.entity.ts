import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import TimesTempEntity from 'src/helpers/timestemp.entity';
@Entity('province')
export class ProvinceEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    length: 100,
    unique: true,
    name: 'libelle_province',
  })
  libelleProvince: string;
}
