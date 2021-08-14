/* eslint-disable prettier/prettier */
import { WifeperiodEntity } from "src/wifeperiod/wifeperiod.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('antigenefemme')
export class AntigenefemmeEntity {
    @PrimaryGeneratedColumn({name:'idantigenefemme'})
    idAntigenWife:number;
    @Column({name:"intitule_af",nullable:false,unique:true})
    antigen_title:string;
    @Column({name:"description_af",nullable:true})
    description_antigen_wife:string;
    @OneToMany(()=>WifeperiodEntity,(wifeperiod)=>wifeperiod.antigen)
    periods:WifeperiodEntity[];
    @OneToMany(()=>WomanVaccinationEntity,(vaccination)=>vaccination.antigen)
    vaccinations: WomanVaccinationEntity[];

}
