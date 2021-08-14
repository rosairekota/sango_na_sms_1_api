/* eslint-disable prettier/prettier */
import { IsEmpty, IsOptional } from "class-validator";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";

export class AddAntigenWifeDto extends GenericValidatorMessages{ 
    @IsEmpty(AddAntigenWifeDto.genericEmptyMessage("l'intitulé de l'antigène"))
    antigen_title:string;
    @IsOptional()
    description_antigen_wife:string;
}