import { ViewColumn, ViewEntity } from 'typeorm';
import { template } from './view-template';

@ViewEntity({
  name: 'statistique_souscription_enfant',
  expression: `${template()}`,
})
export class ChildSearchView {
  @ViewColumn({ name: 'nom' })
  name: string;
  @ViewColumn({ name: 'postnom' })
  lastName: string;

  @ViewColumn({ name: 'prenom' })
  firstName: string;
  @ViewColumn({ name: 'sexe' })
  gender: string;
  @ViewColumn({ name: 'adress_enfant' })
  childAddress: string;
  @ViewColumn({ name: 'date_naissance' })
  birthDate: string;

  @ViewColumn({
    name: 'etat_inscription',
  })
  registrationState: string;
  @ViewColumn({
    name: 'libelle_province',
  })
  @ViewColumn({
    name: 'zoneProvinceId',
  })
  provinceZoneId: number;
  @ViewColumn({
    name: 'provinceId',
  })
  provinceId: number;

  @ViewColumn({
    name: 'zoneId',
  })
  zoneId: number;

  @ViewColumn({
    name: 'aireId',
  })
  aireId: number;

  @ViewColumn({
    name: 'centreId',
  })
  centreId: number;

  labelProvince: string;

  @ViewColumn({
    name: 'libelle_zone',
  })
  labelZone: string;

  @ViewColumn({
    name: 'libelle_aire',
  })
  labelAire: string;

  @ViewColumn({
    name: 'libelle_centre',
  })
  labelCentre: string;

  @ViewColumn({ name: 'telephone_responsable' })
  responsiblePhoneNumer: string;

  @ViewColumn({ name: 'created_at' })
  createdAt: Date;
}
