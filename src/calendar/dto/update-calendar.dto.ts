/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { AntigenEntity } from 'src/antigen/antigen.entity';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { PeriodEntity } from 'src/period/period.entity';
export class UpdateCalenderDto extends GenericValidatorMessages {
  @IsOptional()
  @ApiProperty()
  indice: string;

  @IsOptional()
  @ApiProperty()
  period: PeriodEntity;

  @IsOptional()
  @ApiProperty()
  antigen: AntigenEntity;
}
