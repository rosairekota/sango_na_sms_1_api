/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/auth/user.entity';

export class AddResponsibleDto extends GenericValidatorMessages {
  @IsNotEmpty(
    AddResponsibleDto.genericEmptyMessage('le nom du (de la) responsable'),
  )
  @ApiProperty()
  responsibleName: string;
  @IsNotEmpty(
    AddResponsibleDto.genericEmptyMessage('le post-nom du (de la) responsable'),
  )
  @ApiProperty()
  responsibleLastName: string;
  @IsNotEmpty(
    AddResponsibleDto.genericEmptyMessage('le prénom du (de la) responsable'),
  )
  @ApiProperty()
  firstNameResponsible: string;
  @IsNotEmpty(
    AddResponsibleDto.genericEmptyMessage("l'adresse du (de la) responsble"),
  )
  @ApiProperty()
  responsibleAdress: string;
  @IsNotEmpty(
    AddResponsibleDto.genericEmptyMessage(
      'le numéro de téléphone du (de la) responsable',
    ),
  )
  @ApiProperty()
  responsiblePhoneNumer: string;
  @IsOptional()
  @IsNotEmpty(
    AddResponsibleDto.genericEmptyMessage('le sexe du (de la) responsable'),
  )
  @ApiProperty()
  sexe: string;

  @IsNotEmpty()
  @ApiProperty()
  user: UserEntity;
}
