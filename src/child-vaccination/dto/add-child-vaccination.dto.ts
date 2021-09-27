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
  @IsOptional()
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
  centre : CentreEntity

  @ApiProperty()
  @IsNotEmpty()
  calendar : CalendarEntity

  @ApiProperty()
  @IsOptional()
  weight : number;

  @ApiProperty()
  @IsOptional()
  size : number;

  @ApiProperty()
  @IsNotEmpty()
   received:boolean;
}
