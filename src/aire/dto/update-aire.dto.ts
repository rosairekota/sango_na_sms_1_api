/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class UpdateAireDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  labelAire: string;
}
