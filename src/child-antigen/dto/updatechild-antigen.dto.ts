import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
export class UpdatechildAntigenDto extends GenericValidatorMessages {
  @IsString(
    UpdatechildAntigenDto.genericStringMessage(
      "Le Titre de l'antigène de l'enfant",
    ),
  )
  @IsOptional()
  @MinLength(10, { message: 'Le Minimum 10 caractères SVP !' })
  @MaxLength(50, {
    message: 'Vous ne pouvez pas depassez 20 caractères pour le titre',
  })
  title: string;

  @IsString(UpdatechildAntigenDto.genericStringMessage('La description'))
  @IsOptional()
  description: string;
}
