/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('wifeperiod')
export class WifeperiodEntity {
    @PrimaryGeneratedColumn()
    idwifeperiod : number;
    @Column({name:"intitule",nullable:false})
    title_wife_period : string;
}
