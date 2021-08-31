/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { AddPeriodDto } from './add-period.dto';
export class UpdateChildPeriodDto extends GenericValidatorMessages {
  @IsString(
    AddPeriodDto.genericStringMessage(
      "la description de la periode de l'enfant ",
    ),
  )
  @IsOptional(
    AddPeriodDto.genericEmptyMessage(
      "la description de la periode de l'enfant",
    ),
  )
  labelPeriod: string;

  @IsOptional()
  @IsNumber(
    { allowNaN: false },
    AddPeriodDto.genericNumberMessage(
      "la description de la periode de l'enfant",
    ),
  )
  duration: number;
  @IsOptional()
  @IsString()
  categorie: string;

}
