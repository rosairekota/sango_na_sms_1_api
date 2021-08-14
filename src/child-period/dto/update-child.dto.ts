import { IsString, IsOptional, IsNumber } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
export class UpdateChildPeriodDto extends GenericValidatorMessages {
  @IsString(
    UpdateChildPeriodDto.genericStringMessage(
      "la description de la periode de l'enfant ",
    ),
  )
  @IsOptional()
  description: string;

  @IsOptional()
  @IsNumber(
    { allowNaN: false },
    UpdateChildPeriodDto.genericNumberMessage(
      "la description de la periode de l'enfant",
    ),
  )
  duration: number;
}
