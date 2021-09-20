export const template = (): string => {
  return `(select province.id as provinceId,province.libelle_province,
     zone.id as zoneId,zone.libelle_zone,aire.idaire as aireId,aire.libelle_aire,
     centre.idcentre as centreId,centre.libelle_centre,responsable.numero_telephone_responsable as telephone_responsable,
     femme.nom_femme, femme.postnom_femme,femme.prenom_femme,femme.adress_femme,femme.telephone_femme
     femme.date_naissance,vaccination_femme.id as vaccinationId,vaccination_femme.date_prevue,
     vaccination_femme.date_recue,vaccination_femme.est_notifie,vaccination_femme.date_notification,
     calendrier.id as calendarId,calendrier.indice,periode.id as periodId,periode.libelle_periode,
     periode.nombre_jour,periode.categorie,antigene.id_antigene as antigenId,antigene.intitule_antigene,
     FROM province
     INNER JOIN zone ON province.id=zone.provinceId
     INNER JOIN aire ON zone.id=aire.zoneId
     INNER JOIN centre ON aire.idaire=centre.aireIdaire
     INNER JOIN vaccination_femme ON centre.idcentre=vaccination_femme.centreIdcentre
     INNER JOIN femme ON femme.id=vaccination_femme.femmeIdFemme
     INNER JOIN responsable ON responsable.idresponsable=femme.responsibleIdResponsible
     INNER JOIN calendrier ON calendrier.id=vaccination_femme.calendarIdCalendar
     INNER JOIN antigene ON antigene.id=calendrier.antigenIdAntigen
     INNER JOIN periode ON periode.id=calendrier.periodIdPeriod
     ;)`;
};
