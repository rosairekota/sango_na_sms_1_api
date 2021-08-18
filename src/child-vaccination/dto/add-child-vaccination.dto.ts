import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsString,
  IsOptional,
} from 'class-validator';
import { ChildPeriodEntity } from 'src/child-period/child-perio.entity';
import { ChildEntity } from 'src/child/child.entity';
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';

export class AddChildVaccinationDto extends GenericValidatorMessages {
  @IsNotEmpty(AddChildVaccinationDto.genericEmptyMessage('la date prevue'))
  dueDate: Date;

  @IsOptional()
  receivedDate: Date;

  @IsNotEmpty(AddChildVaccinationDto.genericEmptyMessage('la notification'))
  notification: string;

  @IsNotEmpty(
    AddChildVaccinationDto.genericEmptyMessage('la date de notification'),
  )
  notificationDate: Date;

  @IsNotEmpty(
    AddChildVaccinationDto.genericEmptyMessage('Ajouter un enfant svp'),
  )
  child: ChildEntity;

  @IsNotEmpty(
    AddChildVaccinationDto.genericEmptyMessage(
      "Ajouter la periode de l'enfant svp",
    ),
  )
  childPeriod: ChildPeriodEntity;
}
