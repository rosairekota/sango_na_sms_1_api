/* eslint-disable prettier/prettier */
import { ApiProperty, ApiTags, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { CentreEntity } from 'src/centre/centre.entity';
import { ChildEntity } from 'src/child/child.entity';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
export class UpdateChildRegistrationDto extends GenericValidatorMessages {
  @IsOptional()
  @IsNotEmpty(UpdateChildRegistrationDto.genericEmptyMessage("l'état"))
  @ApiProperty()
  registrationState: string;

  @IsOptional()
  @IsNotEmpty(UpdateChildRegistrationDto.genericEmptyMessage('le centre'))
  @ApiProperty()
  centre: CentreEntity;

  @IsOptional()
  @IsNotEmpty(UpdateChildRegistrationDto.genericEmptyMessage("L'enfant"))
  @ApiProperty()
  child: ChildEntity;
}
