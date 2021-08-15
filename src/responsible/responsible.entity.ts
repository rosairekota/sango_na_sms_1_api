/* eslint-disable prettier/prettier */
import { FemmeEntity } from "src/femme/femme.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { responsibleSexe } from "./enum/responsible-sexe.enum";

@Entity('responsable')
export class ResponsibleEntity extends Timestamp{
    @PrimaryGeneratedColumn({name:'idresponsable'})
    idResponsible:number;
    @Column({name:"nom_responsable", nullable:false})
    responsibleName :string;
    @Column({name:"post_nom_responsable",nullable:false})
    responsibleLastName:string;
    @Column({name:'prenom_responsable'})
    firstNameResponsible:string;
    @Column({name:'adresse_responsable'})
    responsibleAdress:string;
    @Column({name:'numero_telephone_responsable',length:14})
    responsiblePhoneNumer:string
    @Column({name:'email_responsable'})
    responsibleEmail :string;
    @Column({name:'sexe',type:'enum',nullable:false, enum:responsibleSexe,default:responsibleSexe.Homme})
    sexe:string;
    @OneToMany(()=>FemmeEntity,(femme)=>femme.responsible)
    femmes:FemmeEntity[];
}
