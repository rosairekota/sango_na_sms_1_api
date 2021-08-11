import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class UpdateProvinceDto extends GenericValidatorMessages {
  @IsNotEmpty(UpdateProvinceDto.genericEmptyMessage('Le nom de la province'))
  @IsString(UpdateProvinceDto.genericStringMessage('Le nom de la province'))
  @MinLength(4, {
    message: 'Au minimum 4 caractères pour le nom de la province',
  })
  @MaxLength(100, {
    message: 'Au maximum 100 caractères pour le nom de la province',
  })
  libelleProvince: string;
}
