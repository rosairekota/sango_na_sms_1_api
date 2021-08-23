/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsOptional } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class UpdateAntigenWifeDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsEmpty(UpdateAntigenWifeDto.genericEmptyMessage("l'intitulé de l'antigène"))
  antigen_title: string;

  @ApiProperty()
  @IsOptional()
  description_antigen_wife: string;
}
