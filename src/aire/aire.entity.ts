import { ManyToOne,Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import TimesTempEntity from 'src/helpers/timestemp.entity';
import { ZoneEntity } from 'src/zone/zone.entity';

@Entity('aire')
export class AireEntity extends TimesTempEntity {
  @PrimaryGeneratedColumn()
  idaire: number;
  @Column({ nullable: false })
  libelle_aire: string;
//   @ManyToOne({
//       (type) => ZoneEntity,
//       (zone)=> zone.aires,
//       {cascade : true ,
//          nullable:true}
//   })
//   zone :ZoneEntity;
}
