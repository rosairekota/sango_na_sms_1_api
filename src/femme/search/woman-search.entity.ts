/* eslint-disable prettier/prettier */
import { ViewEntity, ViewColumn } from 'typeorm';
import { template } from './view-template';

@ViewEntity({
  name: 'statistique_souscription_femme',
  expression: template(),
})
export class WomanSearchView {
  @ViewColumn({ name: 'nom_femme' })
  nameWife: string;

  @ViewColumn({ name: 'post_nom_femmme' })
  lastName: string;

  @ViewColumn({ name: 'prenom_femme' })
  firstName: string;

  @ViewColumn({
    name: 'telephone_femme',
  })
  wifePhoneNumber: string;
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
  @ViewColumn({ name: '	inscription_femme_etat' })
  woman_inscription_state: string;

  @ViewColumn({ name: 'created_at' })
  createdAt: Date;
  @ViewColumn({ name: 'date_naissance_femme' })
  bithDate: Date;
}
