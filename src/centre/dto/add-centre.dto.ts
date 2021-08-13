import { IsNotEmpty } from "class-validator";
import { AireEntity } from "src/aire/aire.entity";
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class AddCentreDto extends GenericValidatorMessages{
    @IsNotEmpty(AddCentreDto.genericEmptyMessage('centre de santé'))
    labelCentre: string;
    @IsNotEmpty(AddCentreDto.genericEmptyMessage('centre'))
    centreAdress:string
    @IsNotEmpty(AddCentreDto.genericEmptyMessage("aire"))
    aire: AireEntity
}