import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsDate,
  IsBoolean,
} from 'class-validator';
export class AddChildDto extends GenericValidatorMessages {
  @IsNotEmpty(AddChildDto.genericEmptyMessage("Le nom de l'enfant"))
  @IsString(AddChildDto.genericStringMessage("le nom de l'enfant"))
  @MinLength(6, { message: 'Minimu 6 caractères !' })
  @MaxLength(20, { message: 'Maximum 20 caractères pour le nom' })
  name: string;

  @IsNotEmpty(AddChildDto.genericEmptyMessage("le postnom de l'enfant"))
  @IsString(AddChildDto.genericStringMessage("le postnom de l'enfant"))
  @MinLength(10, { message: 'Minimum 10 caractères pour le postnom' })
  @MaxLength(20, { message: 'Maximum 20 caractères pour le postnom' })
  lastName: string;

  @IsNotEmpty(AddChildDto.genericEmptyMessage("le pre nom de l'enfant"))
  @IsString(AddChildDto.genericStringMessage("le prenom de l'enfant"))
  firstName: string;

  @IsNotEmpty(AddChildDto.genericEmptyMessage("Le Sexe de l'enfant n"))
  @IsString(AddChildDto.genericStringMessage("Le Sexe de l'enfant"))
  @MinLength(1, { message: 'Minimum 1 seul caractère pour le sexe' })
  @MaxLength(1, { message: 'Maximum 1 seul caractère pour le sexe' })
  gender: string;

  @IsNotEmpty(
    AddChildDto.genericEmptyMessage("Le lieu de naissance de l'enfant"),
  )
  @IsString(
    AddChildDto.genericStringMessage("Le lieu de Naissance de l'enfant"),
  )
  birthPlace: string;

  @IsNotEmpty(
    AddChildDto.genericStringMessage("La date de Naissance de l'enfant"),
  )
  @IsDate({ message: 'Entrer une date valide svp' })
  birthDate: Date;

  @IsNotEmpty(
    AddChildDto.genericEmptyMessage('Pas de vide. Selectionner oui ou nom'),
  )
  @IsBoolean({ message: 'Une valeur booleen est requis' })
  homeBirth: boolean;

  @IsNotEmpty(AddChildDto.genericEmptyMessage("l'adresse de l'enfant"))
  @IsString(AddChildDto.genericStringMessage("L'adresse de l'enfant"))
  childAdress: string;

  @IsNotEmpty(AddChildDto.genericEmptyMessage("Le nom de la mère de l'enfant"))
  @IsString(AddChildDto.genericStringMessage("Le nom de la mère de l'enfant"))
  motherName: string;

  @IsNotEmpty(
    AddChildDto.genericEmptyMessage(
      "La date de naissance de la mère de l'enfant",
    ),
  )
  @IsDate({ message: 'Veuillez inserer une date valide ! ' })
  dateOfBirthMother: Date;

  @IsNotEmpty(
    AddChildDto.genericEmptyMessage('Le numéro du téléphone de la mère'),
  )
  @IsString()
  motherPhone: string;
}
