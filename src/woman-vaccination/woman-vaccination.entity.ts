/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vaccination_femme')
export class WomanVaccinationEntity {
    @PrimaryGeneratedColumn({
        name:"id_vaccination_femme"
    })
    idWomanVaccination : number;

    @Column({name:"date_prevue",nullable:false})
    plannedDate: Date

    @Column({name:"date_recue"})
    receivedDate : Date;


}
