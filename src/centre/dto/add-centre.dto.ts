/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { AireEntity } from "src/aire/aire.entity";
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ApiProperty } from '@nestjs/swagger';

export class AddCentreDto extends GenericValidatorMessages{
    @IsNotEmpty(AddCentreDto.genericEmptyMessage('centre de santé'))
    @ApiProperty()
    labelCentre: string;
    @IsNotEmpty(AddCentreDto.genericEmptyMessage('centre'))
    @ApiProperty()
    centreAdress:string
    @ApiProperty()
    @IsNotEmpty(AddCentreDto.genericEmptyMessage("aire"))
    aire: AireEntity
}