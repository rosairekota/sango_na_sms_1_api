import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsDate,
  IsBoolean,
  IsOptional,
} from 'class-validator';
export class UpdateChildDto extends GenericValidatorMessages {
  @IsOptional()
  @IsString(UpdateChildDto.genericStringMessage("le nom de l'enfant"))
  @MinLength(6, { message: 'Minimu 6 caractères !' })
  @MaxLength(20, { message: 'Maximum 20 caractères pour le nom' })
  name: string;

  @IsOptional()
  @IsString(UpdateChildDto.genericStringMessage("le postnom de l'enfant"))
  @MinLength(10, { message: 'Minimum 10 caractères pour le postnom' })
  @MaxLength(20, { message: 'Maximum 20 caractères pour le postnom' })
  lastName: string;

  @IsOptional()
  @IsString(UpdateChildDto.genericStringMessage("le prenom de l'enfant"))
  firstName: string;

  @IsOptional()
  @IsString(UpdateChildDto.genericStringMessage("Le Sexe de l'enfant"))
  @MinLength(1, { message: 'Minimum 1 seul caractère pour le sexe' })
  @MaxLength(1, { message: 'Maximum 1 seul caractère pour le sexe' })
  gender: string;

  @IsOptional()
  @IsString(
    UpdateChildDto.genericStringMessage("Le lieu de Naissance de l'enfant"),
  )
  birthPlace: string;

  @IsOptional()
  @IsDate({ message: 'Entrer une date valide svp' })
  birthDate: Date;

  @IsOptional()
  @IsBoolean({ message: 'Une valeur booleen est requis' })
  homeBirth: boolean;

  @IsOptional()
  @IsString(UpdateChildDto.genericStringMessage("L'adresse de l'enfant"))
  childAdress: string;

  @IsOptional()
  @IsString(
    UpdateChildDto.genericStringMessage("Le nom de la mère de l'enfant"),
  )
  motherName: string;

  @IsOptional()
  @IsDate({ message: 'Veuillez inserer une date valide ! ' })
  dateOfBirthMother: Date;

  @IsOptional()
  @IsString()
  motherPhone: string;
}
