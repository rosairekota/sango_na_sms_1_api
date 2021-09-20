/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { ZoneEntity } from "src/zone/zone.entity";
export class UpdateAireDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  labelAire: string;

  @IsNotEmpty()
  zone: ZoneEntity;

  @IsNotEmpty()
  @ApiProperty()
  idaire: number;
}
