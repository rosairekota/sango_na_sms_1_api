/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AireEntity } from "src/aire/aire.entity";
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCentreDto extends GenericValidatorMessages{
    @IsString()
    @IsOptional()
    @ApiProperty()
    libelle_centre: string;
    @IsString()
    @IsOptional()
    @ApiProperty()
    adresse_centre:string;
    @IsString()
    @IsOptional()
    @ApiProperty()
    aire: AireEntity
}