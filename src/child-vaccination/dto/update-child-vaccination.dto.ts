import { IsNotEmpty, IsOptional } from 'class-validator';
import { ChildPeriodEntity } from 'src/child-period/child-perio.entity';
import { ChildEntity } from 'src/child/child.entity';
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
  childPeriod: ChildPeriodEntity;
}