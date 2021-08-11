import { IsNotEmpty, IsString } from "class-validator";
export class AddAireDto {
  @IsNotEmpty()
  @IsString()
  libelle_aire: string;
}
