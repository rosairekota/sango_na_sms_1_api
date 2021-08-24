import { ProfessionalEntity } from 'src/professional/professional.entity';
import { ProvinceEntity } from 'src/province/province.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('professionel_provincial')
export class ProvincialProfessionalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn({ name: 'professionel_id' })
  @OneToOne(() => ProfessionalEntity)
  professional: ProfessionalEntity;

  @JoinColumn({ name: 'province_id' })
  @OneToOne(() => ProvinceEntity)
  province: ProvinceEntity;
}
