/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty,IsNumber } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
export class AddPeriodDto extends GenericValidatorMessages {
  @IsString(
    AddPeriodDto.genericStringMessage(
      "la description de la periode",
    ),
  )
  @IsNotEmpty(
    AddPeriodDto.genericEmptyMessage(
      "la description de la periode",
    ),
  )
  labelPeriod: string;

  @IsNotEmpty()
  @IsNumber(
    { allowNaN: false },
    AddPeriodDto.genericNumberMessage(
      "la description de la periode",
    ),
  )
  duration: number;
  @IsNotEmpty()
  @IsString()
  categorie: string;
}
