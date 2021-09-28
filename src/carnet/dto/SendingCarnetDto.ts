/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional} from "class-validator";
import { ChildVaccinationEntity } from 'src/child-vaccination/child-vaccination.entity';
import { CarnetEntity } from '../carnet.entity';
export class SendingCarnetDto {
  @IsNotEmpty()
  @ApiProperty()
  carnet:CarnetEntity

  @IsOptional()
  @ApiProperty()
  vaccination:ChildVaccinationEntity;
}