/* eslint-disable prettier/prettier */
import {IsOptional } from "class-validator";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
export class UpdateWifeDto extends GenericValidatorMessages{
   
    @IsOptional()
    nameWife:string;
    @IsOptional()
    lastName:string;
    @IsOptional()
    firstName:string
    @IsOptional()
    birthdate:Date;
    @IsOptional()
    wifeAdress:string;
    @IsOptional()
    wifePhoneNumber:string;

}