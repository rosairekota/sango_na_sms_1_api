import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';
export class AddZoneDto extends GenericValidatorMessages {
  @IsString(AddZoneDto.genericStringMessage('le libelle de la zone'))
  @IsNotEmpty(AddZoneDto.genericEmptyMessage('le libelle de la zone'))
  @MinLength(4, {
    message: 'svp au minimum 4 caractères pour le nom de la zone',
  })
  @MaxLength(100, { message: 'svp au maximum 100 caractère le nom de la zone' })
  labelZone: string;
}
