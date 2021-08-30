import { IsNotEmpty, MaxLength, MinLength, IsString } from 'class-validator';
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';

export class AddProfessionalDto extends GenericValidatorMessages {
  @IsNotEmpty(AddProfessionalDto.genericEmptyMessage('Le nom du professionel'))
  @IsString(AddProfessionalDto.genericStringMessage('Le nom du professionel'))
  name: string;

  @IsNotEmpty(
    AddProfessionalDto.genericEmptyMessage('Le postnom du professionel'),
  )
  @IsString(
    AddProfessionalDto.genericStringMessage('Le postnom du professionel'),
  )
  lastmessage: string;

  @IsNotEmpty(
    AddProfessionalDto.genericEmptyMessage('Le prenom du professionel'),
  )
  @IsString(
    AddProfessionalDto.genericStringMessage('Le prenom du professionel'),
  )
  firstmessage: string;

  @IsNotEmpty(AddProfessionalDto.genericEmptyMessage('Le Sexe du professionel'))
  @MaxLength(1, { message: 'Maximum 1 caractère. par exemple:M ou F' })
  @IsString(AddProfessionalDto.genericStringMessage('Le sexe du professionel'))
  gender: string;

  @IsNotEmpty(
    AddProfessionalDto.genericEmptyMessage("L'adresse du professionel"),
  )
  @MinLength(50, { message: "Minimum 50 caractères. pour l'adresse" })
  @IsString(AddProfessionalDto.genericStringMessage("L'adresse professionel"))
  address: string;

  @IsNotEmpty(
    AddProfessionalDto.genericEmptyMessage(
      ' le numéro du téléphone du professionel',
    ),
  )
  @IsString(
    AddProfessionalDto.genericStringMessage(
      'Le numéro du téléphone du  du professionel',
    ),
  )
  @MinLength(10, {
    message: 'Minimum 10 caractères, pour le numéro du téléphone',
  })
  @MaxLength(13, {
    message: 'Maximum 13 caractères, pour le numéro du téléphone',
  })
  telephon: string;

  @IsNotEmpty(
    AddProfessionalDto.genericEmptyMessage(' Le resort du professionel'),
  )
  @IsString(
    AddProfessionalDto.genericStringMessage('Le resort du professionel'),
  )
  resort: string;
}
