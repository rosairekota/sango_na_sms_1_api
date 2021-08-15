/* eslint-disable prettier/prettier */
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { CentreEntity } from "src/centre/centre.entity";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
export class AddChildRegistrationDto extends GenericValidatorMessages{

    @IsNotEmpty(AddChildRegistrationDto.genericEmptyMessage("l'état"))
    @ApiProperty()
    registrationState : string;
    @IsNotEmpty(AddChildRegistrationDto.genericEmptyMessage("le centre"))
    @ApiProperty()
    centre:CentreEntity;
}