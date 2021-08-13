import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AireEntity } from "src/aire/aire.entity";
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class UpdateCentreDto extends GenericValidatorMessages{
    @IsString()
    @IsOptional()
    libelle_centre: string;
    @IsString()
    @IsOptional()
    adresse_centre:string;
    @IsString()
    @IsOptional()
    aire: AireEntity
}