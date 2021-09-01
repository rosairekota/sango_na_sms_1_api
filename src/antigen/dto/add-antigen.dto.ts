import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class AddAntigenDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsNotEmpty(AddAntigenDto.genericEmptyMessage("l'intitulé de l'antigène"))
  antigen_title: string;

  @IsNotEmpty(AddAntigenDto.genericEmptyMessage("l'intitulé de l'antigène"))
  @ApiProperty()
  antigen_description: string;
}
