import { IsOptional } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ProfessionalEntity } from 'src/professional/professional.entity';
import { CentreEntity } from 'src/centre/centre.entity';

export class UpdateCenterProfessionalDto extends GenericValidatorMessages {
  @IsOptional()
  professional: ProfessionalEntity;

  @IsOptional(
    UpdateCenterProfessionalDto.genericEmptyMessage('le professionel'),
  )
  center: CentreEntity;
}
