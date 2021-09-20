export const template = (): string => {
  return `(SELECT province.id as provinceId,province.libelle_province,
     zone.id as zoneId,zone.libelle_zone,aire.idaire as aireId,aire.libelle_aire,
     centre.idcentre as centreId,centre.libelle_centre,responsable.numero_telephone_responsable as telephone_responsable,
     enfant.nom,enfant.postnom,enfant.prenom,enfant.sexe,enfant.adress_enfant,
     enfant.date_naissance,vaccination_enfant.id as vaccinationId,vaccination_enfant.date_prevue,
     vaccination_enfant.date_recue,vaccination_enfant.notifier,vaccination_enfant.date_notification,
     calendrier.id as calendarId,calendrier.indice,periode.id as periodId,periode.libelle_periode,
     periode.nombre_jour,periode.categorie,antigene.id_antigene as antigenId,antigene.intitule_antigene
     FROM province
     INNER JOIN zone ON province.id=zone.provinceId
     INNER JOIN aire ON zone.id=aire.zoneId
     INNER JOIN centre ON aire.idaire=centre.aireIdaire
     INNER JOIN vaccination_enfant ON centre.idcentre=vaccination_enfant.centreIdcentre
     INNER JOIN enfant ON vaccination_enfant.enfant_id=enfant.id
     INNER JOIN responsable ON enfant.responsibleIdResponsible=responsable.idresponsable
     INNER JOIN calendrier ON vaccination_enfant.calendarIdCalendarcalendrier.id
     INNER JOIN antigene ON antigene.id=calendrier.antigenIdAntigen
     INNER JOIN periode ON periode.id=calendrier.periodIdPeriod
     )`;
};
