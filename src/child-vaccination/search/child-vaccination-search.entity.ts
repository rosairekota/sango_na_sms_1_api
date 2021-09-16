import { ViewEntity, ViewColumn } from 'typeorm';
import { template as viewTemplate } from './view-template';
@ViewEntity({
  name: 'statistique_vaccination_enfant',
  expression: `${viewTemplate()}`,
})
export default class ChildVaccinationView {
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

  @ViewColumn({ name: 'date_prevue' })
  dueDate: Date;

  @ViewColumn({ name: 'date_recue' })
  receivedDate: Date;

  @ViewColumn({ name: 'notifier' })
  notificate: string;

  @ViewColumn({ name: 'date_notification' })
  notificationDate: Date;

  @ViewColumn()
  indice: string;

  @ViewColumn({ name: 'libelle' })
  labelPeriod: string;

  @ViewColumn({ name: 'nombre_jour' })
  duration: number;

  @ViewColumn()
  categorie: string;

  @ViewColumn({ name: 'intitule_antigene' })
  antigen_title: string;

  @ViewColumn({ name: 'description_antigene' })
  antigen_description: string;
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

  @ViewColumn({ name: 'telephone_responsable' })
  responsiblePhoneNumer: string;

  @ViewColumn({ name: 'created_at' })
  createdAt: Date;
}
