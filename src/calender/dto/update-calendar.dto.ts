/* eslint-disable prettier/prettier */
import { ApiProperty} from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { PeriodEntity } from 'src/period/period.entity';
import { CalendarEntity } from '../calendar.entity';
export class UpdateChildRegistrationDto extends GenericValidatorMessages {
  @IsOptional()
  @ApiProperty()
  indice: string;

  @ApiProperty()
  @IsOptional()
  period:PeriodEntity

  @ApiProperty()
  @IsOptional()
  calendar : CalendarEntity
}
