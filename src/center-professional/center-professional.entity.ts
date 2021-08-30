import { CentreEntity } from 'src/centre/centre.entity';
import { ProfessionalEntity } from 'src/professional/professional.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('professionel_centre')
export class CenterProfessionalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ProfessionalEntity)
  @JoinColumn({ name: 'professionel_id' })
  professional: ProfessionalEntity;

  @OneToOne(() => CentreEntity)
  @JoinColumn({ name: 'centre_id' })
  center: CentreEntity;
}
