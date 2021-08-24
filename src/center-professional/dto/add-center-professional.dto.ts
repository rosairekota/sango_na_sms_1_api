import { IsNotEmpty } from 'class-validator';
import { CentreEntity } from 'src/centre/centre.entity';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ProfessionalEntity } from 'src/professional/professional.entity';

export class AddCenterProfessionalDto extends GenericValidatorMessages {
  @IsNotEmpty(AddCenterProfessionalDto.genericEmptyMessage('le professionel'))
  professional: ProfessionalEntity;

  @IsNotEmpty(AddCenterProfessionalDto.genericEmptyMessage('le professionel'))
  center: CentreEntity;
}
