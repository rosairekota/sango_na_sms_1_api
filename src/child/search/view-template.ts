export const template = (): string => {
  return `(select province.id as provinceId,libelle_province,
     zone.id as zoneId,libelle_zone,aire.idaire as aireId,libelle_aire,
     centre.idcentre as centreId,libelle_centre,etat_inscription,
     inscription_enfant.createdAt,responsable.numero_telephone_responsable as telephone_responsable,
     enfant.nom, enfant.postnom,enfant.prenom,enfant.sexe,enfant.adress_enfant,enfant.date_naissance from province
     INNER JOIN zone ON province.id=zone.provinceId
     INNER JOIN aire ON zone.id=aire.zoneId
     INNER JOIN centre ON aire.idaire=centre.aireIdaire
     INNER JOIN inscription_enfant ON centre.idcentre=inscription_enfant.centreIdcentre
     INNER JOIN enfant ON enfant.id=inscription_enfant.childId
     INNER JOIN responsable ON responsable.idresponsable=enfant.responsibleIdResponsible;)`;
};
