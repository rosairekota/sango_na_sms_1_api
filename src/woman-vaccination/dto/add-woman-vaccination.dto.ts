/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from "class-validator";
import { AntigenefemmeEntity } from "src/antigenefemme/antigenefemme.entity";
import { FemmeEntity } from "src/femme/femme.entity";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
import { ApiProperty } from '@nestjs/swagger';

export class AddWomanVaccinationDto extends GenericValidatorMessages{
    @ApiProperty()
    @IsNotEmpty(AddWomanVaccinationDto.genericEmptyMessage("La date prévue"))
    plannedDate: Date
    @ApiProperty()
    @IsOptional()
    receivedDate : Date;
    @ApiProperty()
    @IsNotEmpty()
    IsNotified:string;
    @ApiProperty()
    @IsOptional()
    notificationDate:Date
    @ApiProperty()
    @IsNotEmpty(AddWomanVaccinationDto.genericEmptyMessage('la femme'))
    femme:FemmeEntity
    @ApiProperty()
    @IsNotEmpty(AddWomanVaccinationDto.genericEmptyMessage("l'antigène"))
    antigen:AntigenefemmeEntity
}