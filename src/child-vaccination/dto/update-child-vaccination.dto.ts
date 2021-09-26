/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';
import { CentreEntity } from 'src/centre/centre.entity';
import { ChildEntity } from 'src/child/child.entity';
import { PeriodEntity } from 'src/period/period.entity';
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';
export class UpdateChildVaccinationDto extends GenericValidatorMessages {
  @IsNotEmpty(UpdateChildVaccinationDto.genericEmptyMessage('la date prevue'))
  dueDate: Date;

  @IsOptional()
  receivedDate: Date;

  @IsOptional()
  notification: string;

  @IsOptional()
  notificationDate: Date;

  @IsOptional()
  child: ChildEntity;

  @IsOptional()
  period: PeriodEntity;

  @IsOptional()
  center : CentreEntity

}
