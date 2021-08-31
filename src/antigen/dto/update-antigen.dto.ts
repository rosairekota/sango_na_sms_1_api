import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class UpdateAntigenDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsNotEmpty(UpdateAntigenDto.genericEmptyMessage("l'intitulé de l'antigène"))
  @IsOptional()
  antigen_title: string;

  @IsNotEmpty(UpdateAntigenDto.genericEmptyMessage("l'intitulé de l'antigène"))
  @IsOptional()
  @ApiProperty()
  antigen_description: string;
}
