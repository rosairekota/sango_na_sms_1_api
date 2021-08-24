import { ProfessionalEntity } from 'src/professional/professional.entity';
import { ProvinceEntity } from 'src/province/province.entity';
import { IsNotEmpty } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class AddProncialProfessionalDto extends GenericValidatorMessages {
  @IsNotEmpty(AddProncialProfessionalDto.genericEmptyMessage('le professionel'))
  professional: ProfessionalEntity;

  @IsNotEmpty(AddProncialProfessionalDto.genericEmptyMessage('la province'))
  province: ProvinceEntity;
}
