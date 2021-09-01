/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';
import { FemmeEntity } from 'src/femme/femme.entity';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateWomanVaccinationDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsOptional()
  plannedDate: Date;
  @ApiProperty()
  @IsOptional()
  receivedDate: Date;
  @ApiProperty()
  @IsNotEmpty()
  IsNotified: string;
  @ApiProperty()
  @IsOptional()
  notificationDate: Date;
  @ApiProperty()
  @IsOptional()
  femme: FemmeEntity;
}
