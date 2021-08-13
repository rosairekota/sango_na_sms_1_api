import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdatechildAntigenDto extends GenericValidatorMessages {
  @ApiProperty()
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

  @ApiProperty()
  @IsString(UpdatechildAntigenDto.genericStringMessage('La description'))
  @IsOptional()
  description: string;
}
