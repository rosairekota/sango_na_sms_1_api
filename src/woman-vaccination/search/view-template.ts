export const template = (): string => {
  return `(SELECT province.id as provinceId,province.libelle_province,
     zone.id as zoneId,zone.libelle_zone,aire.idaire as aireId,aire.libelle_aire,
     centre.idcentre as centreId,centre.libelle_centre,responsable.numero_telephone_responsable as telephone_responsable,
     femme.nom_femme, femme.post_nom_femme,femme.prenom_femme,femme.adresse_femme,femme.telephone_femme,
     femme.date_naissance_femme,vaccination_femme.id_vaccination_femme as vaccinationId,vaccination_femme.date_prevue,
     vaccination_femme.date_recue,vaccination_femme.est_notifie,vaccination_femme.date_notification,
     calendrier.id as calendarId,calendrier.indice,periode.id as periodId,periode.libelle,
     periode.nombre_jour,periode.categorie,antigene.id_antigene as antigenId,antigene.intitule_antigene
     FROM province
     INNER JOIN zone ON province.id=zone.provinceId
     INNER JOIN aire ON zone.id=aire.zoneId
     INNER JOIN centre ON aire.idaire=centre.aireIdaire
     INNER JOIN vaccination_femme ON centre.idcentre=vaccination_femme.centreIdcentre
     INNER JOIN femme ON femme.idfemme=vaccination_femme.femmeIdwife
     INNER JOIN responsable ON responsable.idresponsable=femme.responsibleIdResponsible
     INNER JOIN calendrier ON calendrier.id=vaccination_femme.calendarId
     INNER JOIN antigene ON antigene.id_antigene=calendrier.antigenId
     INNER JOIN periode ON periode.id=calendrier.periodId
     )`;
};
