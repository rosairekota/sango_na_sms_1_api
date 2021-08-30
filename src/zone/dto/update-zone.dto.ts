import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProvinceEntity } from 'src/province/province.entity';
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';
export class UpdateZoneDto extends GenericValidatorMessages {
  @ApiProperty()
  @ApiProperty()
  @IsNotEmpty()
   id: number;
  @ApiProperty()
  @IsOptional()
  @MaxLength(100, { message: 'svp au maximum 100 caractère le nom de la zone' })
  labelZone: string;
  @ApiProperty()
  @IsOptional()
  province: ProvinceEntity;
}
