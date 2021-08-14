/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
import { ApiProperty} from '@nestjs/swagger';
import { FemmeEntity } from "src/femme/femme.entity";
import { CentreEntity } from "src/centre/centre.entity";
export class AddWomanInscriptionDto extends GenericValidatorMessages{
   @ApiProperty()
    @IsNotEmpty(AddWomanInscriptionDto.genericEmptyMessage("l'état de l'inscription"))
    woman_inscription_state : string;
    @ApiProperty()
    @IsNotEmpty(AddWomanInscriptionDto.genericEmptyMessage("la femme pour une inscription"))
    femme : FemmeEntity;
    @ApiProperty()
    @IsNotEmpty(AddWomanInscriptionDto.genericEmptyMessage("le centre pour une inscription"))
    centre : CentreEntity;     
}