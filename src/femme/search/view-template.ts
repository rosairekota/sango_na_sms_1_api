export const template = (): string => {
  return `(SELECT province.id as provinceId,libelle_province,
    zone.id as zoneId,libelle_zone,aire.idaire as aireId,libelle_aire,
    centre.idcentre as centreId,libelle_centre,	inscription_femme_etat,
    inscription_femme.createdAt,responsable.numero_telephone_responsable as telephone_responsable,
    femme.nom_femme,femme.post_nom_femme,femme.prenom_femme,femme.date_naissance_femme
    FROM province
    INNER JOIN zone ON province.id=zone.provinceId
    INNER JOIN aire ON zone.id=aire.zoneId
    INNER JOIN centre ON aire.idaire=centre.aireIdaire
    INNER JOIN inscription_femme ON centre.idcentre=inscription_femme.centreIdcentre
    INNER JOIN femme ON femme.idfemme=inscription_femme.femmeIdwife
    INNER JOIN responsable ON responsable.idresponsable=femme.responsibleIdResponsible)`;
};
