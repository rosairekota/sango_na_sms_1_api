import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  name: 'statistique_femme_view',
  expression: `(select province.id as provinceId,libelle_province,
    zone.id as zoneId,libelle_zone,aire.idaire as aireId,libelle_aire,
    centre.idcentre as centreId,libelle_centre,	inscription_femme_etat,
    inscription_femme.createdAt,inscription_femme.updatedAt,responsable.numero_telephone_responsable as telephone_responsable,nom_femme, post_nom_femmme,
    prenom_femme from province
    INNER JOIN zone ON province.id=zone.provinceId
    INNER JOIN aire ON zone.id=aire.zoneId
    INNER JOIN centre ON aire.idaire=centre.aireIdaire
    INNER JOIN inscription_femme ON centre.idcentre=inscription_femme.centreIdcentre
    INNER JOIN femme ON femme.idfemme=inscription_femme.femmeIdwife
    INNER JOIN responsable ON responsable.idresponsable=femme.responsibleIdResponsible);`,
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

  @ViewColumn({ name: 'updated_at' })
  updatedAt: Date;
}
