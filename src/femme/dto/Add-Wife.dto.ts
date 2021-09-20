/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CentreEntity } from 'src/centre/centre.entity';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ResponsibleEntity } from 'src/responsible/responsible.entity';

export class AddWifeDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsNotEmpty(AddWifeDto.genericEmptyMessage("nom d'une femme"))
  nameWife: string;

  @ApiProperty()
  @IsNotEmpty(AddWifeDto.genericEmptyMessage("post-nom d'une"))
  lastName: string;

  @ApiProperty()
  @IsNotEmpty(AddWifeDto.genericEmptyMessage("prénom d'une femme"))
  firstName: string;

  @ApiProperty()
  @IsNotEmpty(AddWifeDto.genericEmptyMessage('La date de naissance'))
  birthdate: Date;

  @ApiProperty()
  @IsNotEmpty(AddWifeDto.genericEmptyMessage("l'adresse"))
  wifeAdress: string;

  @ApiProperty()
  @IsNotEmpty(AddWifeDto.genericEmptyMessage('le numéro de téléphone'))
  wifePhoneNumber: string;

  @IsNotEmpty(AddWifeDto.genericEmptyMessage('La femme'))
  @ApiProperty()
  centre: CentreEntity;

  @IsNotEmpty(AddWifeDto.genericEmptyMessage('Le responsable'))
  @ApiProperty()
  responsible: ResponsibleEntity;

  @IsNotEmpty(AddWifeDto.genericEmptyMessage("L'etat"))
  @ApiProperty()
  woman_inscription_state: string;
}
