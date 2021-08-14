/* eslint-disable prettier/prettier */
import { IsEmpty } from "class-validator";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";

export class AddWifeDto extends GenericValidatorMessages{
    @IsEmpty(AddWifeDto.genericEmptyMessage("nom d'une femme"))
    nameWife:string;
    @IsEmpty(AddWifeDto.genericEmptyMessage("post-nom d'une"))
    lastName:string;
    @IsEmpty(AddWifeDto.genericEmptyMessage("prénom d'une femme"))
    firstName:string
    @IsEmpty(AddWifeDto.genericEmptyMessage("La date de naissance"))
    birthdate:Date;
    @IsEmpty(AddWifeDto.genericEmptyMessage("l'adresse"))
    wifeAdress:string;
    @IsEmpty(AddWifeDto.genericEmptyMessage("le numéro de téléphone"))
    wifePhoneNumber:string;
}