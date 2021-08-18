import { IsOptional, MaxLength, MinLength, IsString } from 'class-validator';
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';
export class UpdateProfessionalDto extends GenericValidatorMessages {
  @IsOptional(
    UpdateProfessionalDto.genericEmptyMessage(
      'Le nom du professionel est optionel',
    ),
  )
  @IsString(
    UpdateProfessionalDto.genericStringMessage('Le nom du professionel'),
  )
  name: string;

  @IsOptional(
    UpdateProfessionalDto.genericEmptyMessage(
      'Le postnom du professionel est optionel',
    ),
  )
  @IsString(
    UpdateProfessionalDto.genericStringMessage('Le postnom du professionel'),
  )
  lastmessage: string;

  @IsOptional(
    UpdateProfessionalDto.genericEmptyMessage(
      'Le prenom du professionel est optionel',
    ),
  )
  @IsString(
    UpdateProfessionalDto.genericStringMessage('Le prenom du professionel'),
  )
  firstmessage: string;

  @IsOptional(
    UpdateProfessionalDto.genericEmptyMessage(
      'Le Sexe du professionel est optionel',
    ),
  )
  @MaxLength(1, { message: 'Maximum 1 caractère. par exemple:M ou F' })
  @IsString(
    UpdateProfessionalDto.genericStringMessage('Le sexe du professionel'),
  )
  gender: string;

  @IsOptional(
    UpdateProfessionalDto.genericEmptyMessage(
      "L'adresse du professionel est optionel",
    ),
  )
  @MinLength(50, { message: "Minimum 50 caractères. pour l'adresse" })
  @IsString(
    UpdateProfessionalDto.genericStringMessage("L'adresse professionel"),
  )
  address: string;

  @IsOptional(
    UpdateProfessionalDto.genericEmptyMessage(
      ' le numéro du téléphone du professionel est optionel',
    ),
  )
  @IsString(
    UpdateProfessionalDto.genericStringMessage(
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

  @IsOptional(
    UpdateProfessionalDto.genericEmptyMessage(
      ' Le resort du professionel est optionel',
    ),
  )
  @IsString(
    UpdateProfessionalDto.genericStringMessage('Le resort du professionel'),
  )
  resort: string;
}
