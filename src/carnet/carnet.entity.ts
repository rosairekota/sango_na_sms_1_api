/* eslint-disable prettier/prettier */
import { ViewEntity } from "typeorm";

@ViewEntity({
    name:"carnet_enfant",
    expression:`select 
    enfant.id as idEnfant,enfant.nom as nomEnfant, enfant.sexe,enfant.postnom as postNomEnfant, enfant.date_naissance as date_naissance, enfant.prenom as prenom,
    periode.id as periodeId, periode.libelle as libelle_periode,periode.nombre_jour as nombre_jour, periode.categorie as categoriePeriode,
    antigene.id_antigene, antigene.intitule_antigene, antigene.description_antigene,
    vaccination_enfant.id,ADDDATE(enfant.date_naissance,periode.nombre_jour) as date_prevue,vaccination_enfant.date_recu,vaccination_enfant.notifier,
    calendrier.indice
    from 
    vaccination_enfant right join calendrier on calendrier.id=vaccination_enfant.calendarId cross join enfant inner join antigene on 
    calendrier.antigen_id = antigene.id_antigene inner join periode on periode.id = calendrier.periode_id;`
 })
export class CarnetEntity {}
