import {
  ViewEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class WomanSearchView {
  @Column({ name: 'nom_femme', nullable: false })
  nameWife: string;

  @Column({ name: 'post_nom_femmme', nullable: false })
  lastName: string;

  @Column({ name: 'prenom_femme' })
  firstName: string;

  @Column({
    name: 'telephone_femme',
    nullable: false,
    unique: true,
    length: 14,
  })
  wifePhoneNumber: string;
  provinceZoneId: number;
  @Column({
    name: 'provinceId',
  })
  provinceId: number;

  @Column({
    name: 'zoneId',
  })
  zoneId: number;

  @Column({
    name: 'aireId',
  })
  aireId: number;

  @Column({
    name: 'centreId',
  })
  centreId: number;

  labelProvince: string;

  @Column({
    name: 'libelle_zone',
    type: 'varchar',
    length: 100,
  })
  labelZone: string;

  @Column({
    name: 'libelle_aire',
    nullable: false,
  })
  labelAire: string;

  @Column({
    unique: true,
    name: 'libelle_centre',
  })
  labelCentre: string;

  @Column({ name: 'telephone_responsable', length: 14 })
  responsiblePhoneNumer: string;

  @CreateDateColumn({ update: false })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
