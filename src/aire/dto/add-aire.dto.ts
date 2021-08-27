/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from "class-validator";
import { ZoneEntity } from 'src/zone/zone.entity';
export class AddAireDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  labelAire: string;

  @IsNotEmpty()
  @ApiProperty()
  zone:ZoneEntity;
}
