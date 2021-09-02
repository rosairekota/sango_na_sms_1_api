/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { PeriodEntity } from 'src/period/period.entity';
import { AntigenEntity } from 'src/antigen/antigen.entity';
export class AddCalenderDto extends GenericValidatorMessages {
  @ApiProperty()
  indice: string;

  @ApiProperty()
  @IsNotEmpty(AddCalenderDto.genericEmptyMessage('la periode'))
  period: PeriodEntity;

  @ApiProperty()
  @IsNotEmpty(AddCalenderDto.genericEmptyMessage("l'antigene"))
  antigen: AntigenEntity;
}
