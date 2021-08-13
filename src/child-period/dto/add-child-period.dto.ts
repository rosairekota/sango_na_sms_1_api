import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
export class AddChildPeriodDto extends GenericValidatorMessages {
  @IsString(
    AddChildPeriodDto.genericStringMessage(
      "la description de la periode de l'enfant ",
    ),
  )
  @IsNotEmpty(
    AddChildPeriodDto.genericEmptyMessage(
      "la description de la periode de l'enfant",
    ),
  )
  description: string;

  @IsNotEmpty()
  @IsNumber(
    { allowNaN: false },
    AddChildPeriodDto.genericNumberMessage(
      "la description de la periode de l'enfant",
    ),
  )
  duration: number;
}
