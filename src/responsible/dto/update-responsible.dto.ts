/* eslint-disable prettier/prettier */
import { IsOptional} from "class-validator";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
import { ApiProperty} from "@nestjs/swagger";

export class UpdateResponsibleDto extends GenericValidatorMessages{
    @IsOptional()
    @ApiProperty()
    responsibleName :string;
    @IsOptional()
    @ApiProperty()
    responsibleLastName:string;
    @IsOptional()
    @ApiProperty()
    firstNameResponsible:string;
    @IsOptional()
    @ApiProperty()
    responsibleAdress:string;
    @IsOptional()
    @ApiProperty()
    responsiblePhoneNumer:string
    @IsOptional()
    @ApiProperty()
    responsibleEmail :string;
    @IsOptional()
    @ApiProperty()
    sexe:string;
}