/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";
export class AddAireDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  labelAire: string;
}
