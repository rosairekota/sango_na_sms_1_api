/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
export class AddAireDto {
  @IsNotEmpty()
  @IsString()
  labelAire: string;
}
