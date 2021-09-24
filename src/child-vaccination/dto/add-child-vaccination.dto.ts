/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import {ChildEntity} from "../../child/child.entity";
import {CentreEntity} from "../../centre/centre.entity"
import { GenericValidatorMessages } from '../../helpers/generic-validator-message.dto';
import {CalendarEntity} from "../../calendar/calendar.entity";
import { ApiProperty } from '@nestjs/swagger';


export class AddChildVaccinationDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsNotEmpty(AddChildVaccinationDto.genericEmptyMessage('la date prevue'))
  dueDate: Date;

  @ApiProperty()
  @IsOptional()
  receivedDate: Date;

  @ApiProperty()
  @IsOptional()
  notificate: string;

  @ApiProperty()
  @IsOptional()
  notificationDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  child : ChildEntity

  @ApiProperty()
  @IsNotEmpty()
  center : CentreEntity

  @ApiProperty()
  @IsNotEmpty()
  calendar : CalendarEntity

  @ApiProperty()
  @IsOptional()
  isDueDateModified:boolean;

  @ApiProperty()
  @IsNotEmpty()
  weight : number;
  @ApiProperty()
  @IsNotEmpty()
  size : number;
  @ApiProperty()
  @IsNotEmpty()
   received:boolean;
}
