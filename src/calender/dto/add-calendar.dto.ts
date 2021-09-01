/* eslint-disable prettier/prettier */
import { ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CentreEntity } from 'src/centre/centre.entity';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ChildEntity } from 'src/child/child.entity';
export class AddChildRegistrationDto extends GenericValidatorMessages {
  @IsNotEmpty(AddChildRegistrationDto.genericEmptyMessage("l'état"))
  @ApiProperty()
  registrationState: string;
  @IsNotEmpty(AddChildRegistrationDto.genericEmptyMessage('le centre'))
  @ApiProperty()
  centre: CentreEntity;

  @IsNotEmpty(AddChildRegistrationDto.genericEmptyMessage("L'enfant"))
  @ApiProperty()
  child: ChildEntity;
}
