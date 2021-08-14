/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsOptional } from "class-validator";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
import { ApiProperty} from '@nestjs/swagger';
import { FemmeEntity } from "src/femme/femme.entity";
import { CentreEntity } from "src/centre/centre.entity";
export class UpdateWomanInscriptionDto extends GenericValidatorMessages{
   @ApiProperty()
    @IsOptional()
    woman_inscription_state : string;
    @ApiProperty()
    @IsOptional()
    femme : FemmeEntity;
    @ApiProperty()
    @IsOptional()
    centre : CentreEntity;     
}