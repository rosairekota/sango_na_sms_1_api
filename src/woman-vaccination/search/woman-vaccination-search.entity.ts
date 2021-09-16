import { ViewEntity, ViewColumn } from 'typeorm';
import { template as viewTemplate } from './view-template';
@ViewEntity({
  name: 'statistique_vaccination_enfant',
  expression: `${viewTemplate()}`,
})
export default class WomanVaccinationView {
  @ViewColumn({
    name: 'idfemme',
  })
  idwife: number;
  @ViewColumn({ name: 'nom_femme' })
  nameWife: string;
  @ViewColumn({ name: 'post_nom_femmme' })
  lastName: string;
  @ViewColumn({ name: 'prenom_femme' })
  firstName: string;
  @ViewColumn({ name: 'date_naissance_femme' })
  birthdate: Date;
  @ViewColumn({ name: 'adresse_femme' })
  wifeAdress: string;
  @ViewColumn({
    name: 'telephone_femme',
  })
  wifePhoneNumber: string;

  @ViewColumn({ name: 'date_notification' })
  notificationDate: Date;

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

  @ViewColumn({
    name: 'provinceId',
  })
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

  @ViewColumn({ name: 'calendarId' })
  calendarId: number;

  @ViewColumn()
  indice: string;

  @ViewColumn({ name: 'periodId' })
  periodId: number;

  @ViewColumn({ name: 'libellePeriod' })
  labelPeriod: string;

  @ViewColumn({ name: 'nombre_jour' })
  duration: number;

  @ViewColumn()
  categorie: string;

  @ViewColumn({ name: 'antigenId' })
  antigenId: number;

  @ViewColumn({ name: 'intitule_antigene' })
  antigen_title: string;

  @ViewColumn({ name: 'telephone_responsable' })
  responsiblePhoneNumer: string;
}
