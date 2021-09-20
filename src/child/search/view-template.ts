export const template = (): string => {
  return `(SELECT province.id as provinceId,province.libelle_province,
     zone.id as zoneId,zone.libelle_zone,aire.idaire as aireId,aire.libelle_aire,
     centre.idcentre as centreId,centre.libelle_centre,inscription_enfant.etat_inscription,
     inscription_enfant.createdAt,responsable.numero_telephone_responsable as telephone_responsable,
     enfant.nom, enfant.postnom,enfant.prenom,enfant.sexe,enfant.adress_enfant,enfant.date_naissance
     FROM province
     INNER JOIN zone ON province.id=zone.provinceId
     INNER JOIN aire ON zone.id=aire.zoneId
     INNER JOIN centre ON aire.idaire=centre.aireIdaire
     INNER JOIN inscription_enfant ON inscription_enfant.centreIdcentre=centre.idcentre
     INNER JOIN enfant ON enfant.id=inscription_enfant.childId
     INNER JOIN responsable ON responsable.idresponsable=enfant.responsibleIdResponsible)`;
};
