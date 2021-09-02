/* eslint-disable prettier/prettier */
import { ViewEntity } from "typeorm";

@ViewEntity({
    name:"carnet_enfant",
    expression:`select 
    province.id as provinceId,
    libelle_province,
    zone.id as zoneId,
    libelle_zone,
    aire.idaire as aireId,
    libelle_aire,
    centre.idcentre as idCentre,
    libelle_centre,
    adresse_centre,
    inscription_enfant.id as inscriptionId,
    inscription_enfant.type as typeInscription,
    etat_inscription,
    enfant.id as enfantId,
    enfant.nom,
    enfant.postnom,
    enfant.prenom,
    enfant.sexe,
    enfant.lieu_naissance,
    date_naissance,
    naissance_maison,
    adress_enfant,
    vaccination_enfant.id as  vaccination_enfantId,
    date_prevue,
    date_recu,
    notifier,
    date_notification,
    calendrier.id as calendrierId,
    calendrier.indice as indiceCalendrier,
    antigene.id_antigene as antigeneId,
    intitule_antigene,
    description_antigene,
    responsable.idresponsable as responsibleId,
    nom_responsable,
    post_nom_responsable,
    prenom_responsable,
    adresse_responsable,
    numero_telephone_responsable,
    responsable.sexe as sexeResponsable
    from province inner join zone
    on province.id = zone.provinceId
    inner join aire on zone.id = aire.zoneId
    inner join centre on aire.idaire= centre.aireIdaire
    inner join inscription_enfant on centre.idcentre = inscription_enfant.centreIdcentre
    inner join 
    enfant on inscription_enfant.childId = enfant.id
    left join  vaccination_enfant
    on enfant.id = vaccination_enfant.enfant_id
    left join calendrier
    on vaccination_enfant.calendarId=calendrier.id
    inner join  antigene on calendrier.antigenId = antigene.id_antigene 
    inner join responsable on enfant.responsibleIdResponsible= responsable.idresponsable;`
 })
export class CarnetEntity {}
