/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
export class UpdateAireDto {
  @IsOptional()
  @IsString()
  labelAire: string;
}
