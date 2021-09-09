import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'statistique_enfant_view',
  expression: `(select province.id as provinceId,libelle_province,
     zone.id as zoneId,libelle_zone,aire.idaire as aireId,libelle_aire,
     centre.idcentre as centreId,libelle_centre,etat_inscription,
     inscription_enfant.createdAt,inscription_enfant.updatedAt,responsable.numero_telephone_responsable as telephone_responsable,nom, postnom,
     prenom from province
     INNER JOIN zone ON province.id=zone.provinceId
     INNER JOIN aire ON zone.id=aire.zoneId
     INNER JOIN centre ON aire.idaire=centre.aireIdaire
     INNER JOIN inscription_enfant ON centre.idcentre=inscription_enfant.centreIdcentre
     INNER JOIN enfant ON enfant.id=inscription_enfant.childId
     INNER JOIN responsable ON responsable.idresponsable=enfant.responsibleIdResponsible);`,
})
export class ChildSearchView {
  @ViewColumn({ name: 'nom' })
  name: string;
  @ViewColumn({ name: 'postnom' })
  lastName: string;

  @ViewColumn({ name: 'prenom' })
  firstName: string;

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

  @ViewColumn({ name: 'updated_at' })
  updatedAt: Date;
}
