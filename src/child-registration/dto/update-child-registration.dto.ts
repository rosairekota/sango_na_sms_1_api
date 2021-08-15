/* eslint-disable prettier/prettier */
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { CentreEntity } from "src/centre/centre.entity";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
export class AddChildRegistrationDto extends GenericValidatorMessages{

    @IsOptional()
    @ApiProperty()
    registrationState : string;
    @IsOptional()
    @ApiProperty()
    centre:CentreEntity;
}