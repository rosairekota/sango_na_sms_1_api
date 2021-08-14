import { ResorEnum } from './enum/resort.enum';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity('professionel')
export class ProfessionalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom' })
  name: string;

  @Column({ name: 'postnom' })
  lastName: string;

  @Column({ name: 'prenom' })
  firstName: string;

  @Column({ name: 'sexe' })
  gender: string;

  @Column({ name: 'adresse' })
  address: string;

  @Column({ name: 'telephone' })
  telephon: string;

  @Column({
    name: 'resort',
    type: 'enum',
    enum: ResorEnum,
    default: ResorEnum.national,
  })
  resort: string;
}
