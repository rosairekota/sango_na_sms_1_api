/* eslint-disable prettier/prettier */
import { ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
import { ChildEntity } from 'src/child/child.entity';
import { PeriodEntity } from 'src/period/period.entity';
import { CalendarEntity } from '../calendar.entity';
export class AddCalendarDto extends GenericValidatorMessages {
  @IsOptional()
  @ApiProperty()
  indice: string;

  @ApiProperty()
  @IsNotEmpty()
  period:PeriodEntity

  @ApiProperty()
  @IsNotEmpty()
  calendar : CalendarEntity
}
