/* eslint-disable prettier/prettier */
import { CentreEntity } from "src/centre/centre.entity";
import { FemmeEntity } from "src/femme/femme.entity";
import TimesTempEntity from "src/helpers/timestemp.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WomanInscriptionEtat } from "./enum/woman-inscription-etat.enum";

@Entity("inscription_femme")
export class WomanInscriptionEntity extends TimesTempEntity{

    @PrimaryGeneratedColumn({name:"id_inscription_femme"})
    idWomanInscription : number;
    @Column({name:'inscription_femme_etat',type:'enum',enum:WomanInscriptionEtat,default:WomanInscriptionEtat.Active})
    woman_inscription_state : string;
    @ManyToOne(()=>FemmeEntity,(femme)=>femme.inscriptions,{
        cascade:true
    })
    femme : FemmeEntity;
    @ManyToOne(()=>CentreEntity,(centre)=>centre.inscriptions,{
        cascade:true
    })
    centre : CentreEntity;        
}
