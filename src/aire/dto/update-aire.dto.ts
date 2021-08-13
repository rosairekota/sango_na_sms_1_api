import { IsNotEmpty, IsOptional, IsString } from "class-validator";
export class UpdateAireDto {
  @IsOptional()
  @IsString()
  libelle_aire: string;
}
