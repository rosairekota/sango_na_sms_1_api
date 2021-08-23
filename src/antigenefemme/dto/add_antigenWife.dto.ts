/* eslint-disable prettier/prettier */
import { IsEmpty, IsOptional } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ApiProperty } from '@nestjs/swagger';

export class AddAntigenWifeDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsEmpty(AddAntigenWifeDto.genericEmptyMessage("l'intitulé de l'antigène"))
  antigen_title: string;

  @ApiProperty()
  @IsOptional()
  description_antigen_wife: string;
}
