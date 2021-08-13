import { IsNotEmpty } from "class-validator";
import { AireEntity } from "src/aire/aire.entity";
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class AddCentreDto extends GenericValidatorMessages{
    @IsNotEmpty(AddCentreDto.genericEmptyMessage('centre de santé'))
    libelle_centre: string;
    @IsNotEmpty(AddCentreDto.genericEmptyMessage('centre'))
    adresse_centre:string
    @IsNotEmpty(AddCentreDto.genericEmptyMessage("aire"))
    aire: AireEntity
}