import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
export class AddchildAntigenDto extends GenericValidatorMessages {
  @IsString(
    AddchildAntigenDto.genericStringMessage(
      "le titre de l'antigène de l'enfant",
    ),
  )
  @IsNotEmpty(
    AddchildAntigenDto.genericEmptyMessage(
      "Le Titre de l'antigène de l'enfant",
    ),
  )
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'maximum 100 caractères !' })
  description: string;
}
