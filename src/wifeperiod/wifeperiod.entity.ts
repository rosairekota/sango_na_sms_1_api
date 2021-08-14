/* eslint-disable prettier/prettier */
import { AntigenefemmeEntity } from "src/antigenefemme/antigenefemme.entity";
import { FemmeEntity } from "src/femme/femme.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('wifeperiod')
export class WifeperiodEntity {
    @PrimaryGeneratedColumn({
        name:"idperiodfemme"
    })
    idwifeperiod : number;
    @Column({name:"description_af",nullable:false})
    description_wife_period : string;
    @Column({name:"duree_en_jour",nullable:false})
    period_duration :number;
    @ManyToOne(()=>AntigenefemmeEntity,(antigenefemme)=>antigenefemme.periods)
    antigen :AntigenefemmeEntity;


}
