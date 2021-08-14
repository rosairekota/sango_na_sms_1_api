/* eslint-disable prettier/prettier */
import { IsEmpty, IsNotEmpty, IsOptional} from "class-validator";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
import { ApiProperty, ApiTags } from '@nestjs/swagger';


export class AddWifePerioDto extends GenericValidatorMessages{
    @ApiProperty()
    @IsNotEmpty(AddWifePerioDto.genericEmptyMessage("l'intitulé de la période"))
    title_wife_period : string;

    @ApiProperty()
    @IsOptional()
    description_wife_period : string;

    @ApiProperty()
    @IsNotEmpty(AddWifePerioDto.genericEmptyMessage("la durée d'une période"))
    period_duration :number;

}