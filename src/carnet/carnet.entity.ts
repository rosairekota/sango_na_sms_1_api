/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { AntigenEntity } from "src/antigen/antigen.entity";
import { CalendarEntity } from "src/calendar/calendar.entity";
import { ChildVaccinationEntity } from "src/child-vaccination/child-vaccination.entity";
import { PeriodEntity } from "src/period/period.entity";
import { Column, Repository, ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
    name:"carnet_enfant",
    expression:`select 
    enfant.id as idEnfant,enfant.nom as nomEnfant, enfant.sexe,enfant.postnom as postNomEnfant, 
    enfant.date_naissance as date_naissance, enfant.prenom as prenom,
    periode.id as periodeId, periode.libelle as libelle_periode,periode.nombre_jour as nombre_jour, periode.categorie as categoriePeriode,
    antigene.id_antigene, antigene.intitule_antigene, antigene.description_antigene,vaccination_enfant.more_days,
    vaccination_enfant.id as vaccinationEnfantId,vaccination_enfant.est_pris as received,ADDDATE(date_naissance,nombre_jour) default_date_prevue,
    vaccination_enfant.date_recu,vaccination_enfant.notifier,responsable.numero_telephone_responsable,
    calendrier.indice,calendrier.id as calendrierId,vaccination_enfant.date_prevue,
    centre.idcentre centreId, province.id as provinceId,zone.id as zoneId, aire.idaire aireId
    from
    vaccination_enfant 
    right join calendrier on calendrier.id=vaccination_enfant.calendarId  
    cross join enfant inner join antigene on calendrier.antigenId = antigene.id_antigene 
    inner join periode on periode.id = calendrier.periodId 
    inner join responsable on enfant.responsibleIdResponsible = responsable.idresponsable 
    inner join inscription_enfant on enfant.id = inscription_enfant.childId
    inner join centre on centre.idcentre= inscription_enfant.centreIdcentre
    inner join aire on aire.idaire = centre. aireIdaire
    inner join zone on zone.id = aire.zoneId
    inner join province on province.id = zone.provinceId
    order by indice,intitule_antigene,periodeId;`
 })
export class CarnetEntity {
    @Column()
     idEnfant: number
     @Column()
     nomEnfant: string
     @Column()
     sexe:string
     @Column()
     postNomEnfant: string
     @Column()
     prenom: string
     @Column()
     libelle_periode : string
     @Column()
     nombre_jour : number
     @Column()
     categoriePeriode : string
     @Column()
     intitule_antigene : string
     @Column()
     description_antigene :string
     @Column()
     date_prevue: Date
     @Column({nullable:true})
     date_recu : Date
     @Column()
     notifier :string
     @Column()
     indice:string 
     @Column()
     calendrierId:number 
     @Column({name:"default_date_prevue"})
     default_date_prevue: Date
     @Column()
     vaccinationEnfantId: number
     @Column()
     received: boolean
}
