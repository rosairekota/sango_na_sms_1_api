/* eslint-disable prettier/prettier */
import { IsOptional} from "class-validator";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
import { ApiProperty} from '@nestjs/swagger';

export class UpdateWifePerioDto extends GenericValidatorMessages{
    @ApiProperty()
    @IsOptional()
    title_wife_period : string;

    @ApiProperty()
    @IsOptional()
    description_wife_period : string;

    @ApiProperty()
    @IsOptional()
    period_duration :number;
}