/* eslint-disable prettier/prettier */
import { CentreEntity } from "src/centre/centre.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('femme')
export class FemmeEntity {
    @PrimaryGeneratedColumn({
        name:"idfemme"
    })
    idwife:number;
    @Column({name:"nom_femme",nullable:false})
    nameWife:string;
    @Column({name:"post_nom_femmme",nullable:false})
    lastName:string;
    @Column({name:"prenom_femme"})
    firstName:string
    @Column({name:"date_naissance_femme",nullable:false})
    birthdate:Date;
    @Column({name:"adresse_femme",nullable:false})
    wifeAdress:string;
    @Column({name:"telephone_femme",nullable:false,unique:true,length:14})
    wifePhoneNumber:string
    @ManyToMany(()=>CentreEntity)
    @JoinTable()
    centres : CentreEntity[]

}
