import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import TimesTempEntity from 'src/helpers/timestemp.entity';

@Entity('aire')
export class AireEntity extends TimesTempEntity{
  @PrimaryGeneratedColumn()
  idaire: number;
  @Column()
  libelle_aire: string;
}
