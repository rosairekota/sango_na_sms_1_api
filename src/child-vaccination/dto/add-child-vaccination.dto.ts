/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ChildRegistrationEntity } from 'src/child-registration/child-registration.entity';
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';

export class AddChildVaccinationDto extends GenericValidatorMessages {
  @IsNotEmpty(AddChildVaccinationDto.genericEmptyMessage('la date prevue'))
  dueDate: Date;

  @IsOptional()
  receivedDate: Date;

  @IsNotEmpty(AddChildVaccinationDto.genericEmptyMessage('la notification'))
  notificate: string;

  @IsOptional()
  notificationDate: Date;

  @IsNotEmpty()
  registration : ChildRegistrationEntity;
}
