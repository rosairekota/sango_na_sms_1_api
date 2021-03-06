import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';

export class UpdateAntigenDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsOptional()
  antigen_title: string;
  @IsOptional()
  @ApiProperty()
  antigen_description: string;
}
