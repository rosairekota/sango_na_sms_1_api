import { ProfessionalEntity } from 'src/professional/professional.entity';
import { ProvinceEntity } from 'src/province/province.entity';
import { IsOptional } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class UpdateProncialProfessionalDto extends GenericValidatorMessages {
  @IsOptional(
    UpdateProncialProfessionalDto.genericEmptyMessage('le professionel'),
  )
  professional: ProfessionalEntity;

  @IsOptional(UpdateProncialProfessionalDto.genericEmptyMessage('la province'))
  province: ProvinceEntity;
}
