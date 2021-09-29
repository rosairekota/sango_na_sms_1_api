/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';
import { CalendarEntity } from 'src/calendar/calendar.entity';
import { CentreEntity } from 'src/centre/centre.entity';
import { ChildEntity } from 'src/child/child.entity';
import { PeriodEntity } from 'src/period/period.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';
export class UpdateChildVaccinationDto extends GenericValidatorMessages {
  @IsOptional()
  dueDate: Date;
  @IsOptional()
  receivedDate: Date;
  @IsOptional()
  notification: string;
  @IsOptional()
  notificationDate: Date;
  @IsOptional()
  child: ChildEntity;
  @IsOptional()
  period: PeriodEntity;
  @IsOptional()
  centre : CentreEntity
  @IsOptional()
  size:number;
  @IsOptional()
  weight: number;
  @IsOptional()
  isDueDateModified:boolean;
  @IsOptional()
  calendar: CalendarEntity;
  @IsOptional()
  notificate: string;
  @IsOptional()
  received: boolean;
}
