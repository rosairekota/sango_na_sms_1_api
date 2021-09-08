import { AddChildRegistrationDto } from 'src/child-registration/dto/add-child-registration.dto';
import { AddChildRegistration } from 'src/child-registration/enum/add-child-registration.enum';
import { Column, PrimaryGeneratedColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'statistique_enfant_view',
  expression: `(select province.id as provinceId,libelle_province,
     zone.id as zoneId,libelle_zone,aire.idaire as aireId,libelle_aire,
     centre.idcentre as centreId,libelle_centre,etat_inscription, nom, postnom,
     prenom from province
     INNER JOIN zone ON province.id=zone.provinceId
     INNER JOIN aire ON zone.id=aire.zoneId
     INNER JOIN centre ON aire.idaire=centre.aireIdaire
     INNER JOIN inscription_enfant ON centre.idcentre=inscription_enfant.centreIdcentre
     INNER JOIN enfant ON enfant.id=inscription_enfant.childId);`,
})
export class ChildSearchView {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom' })
  name: string;
  @Column({ name: 'postnom' })
  lastName: string;

  @Column({ name: 'prenom' })
  firstName: string;

  @Column({
    name: 'etat_inscription',
    type: 'enum',
    enum: AddChildRegistrationDto,
    default: AddChildRegistration.ACTIF,
  })
  registrationState: string;
  @Column({
    length: 100,
    unique: true,
    name: 'libelle_province',
  })
  @Column({
    name: 'zoneProvinceId',
  })
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
}
