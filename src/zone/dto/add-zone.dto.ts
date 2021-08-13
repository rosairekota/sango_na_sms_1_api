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
export class AddZoneDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsString(AddZoneDto.genericStringMessage('le libelle de la zone'))
  @IsNotEmpty(AddZoneDto.genericEmptyMessage('le libelle de la zone'))
  @MinLength(4, {
    message: 'svp au minimum 4 caractères pour le nom de la zone',
  })
  @ApiProperty()
  @MaxLength(100, { message: 'svp au maximum 100 caractère le nom de la zone' })
  labelZone: string;
  @IsOptional()
  province: ProvinceEntity;
}
