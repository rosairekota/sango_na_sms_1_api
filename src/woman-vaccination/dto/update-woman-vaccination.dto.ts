/* eslint-disable prettier/prettier */
<<<<<<< HEAD
import { IsNotEmpty, IsOptional } from "class-validator";
// import { AntigenefemmeEntity } from "src/antigenefemme/antigenefemme.entity";
import { FemmeEntity } from "src/femme/femme.entity";
import { GenericValidatorMessages } from "src/helpers/generic-validator-message.dto";
=======
import { IsNotEmpty, IsOptional } from 'class-validator';
import { FemmeEntity } from 'src/femme/femme.entity';
import { GenericValidatorMessages } from 'src/helpers/generic-validator-message.dto';
>>>>>>> 4539f70fa5f8a6cf4cdefc506e44b19ceb32c2a6
import { ApiProperty } from '@nestjs/swagger';

export class UpdateWomanVaccinationDto extends GenericValidatorMessages {
  @ApiProperty()
  @IsOptional()
  plannedDate: Date;
  @ApiProperty()
  @IsOptional()
  receivedDate: Date;
  @ApiProperty()
  @IsNotEmpty()
  IsNotified: string;
  @ApiProperty()
  @IsOptional()
  notificationDate: Date;
  @ApiProperty()
  @IsOptional()
  femme: FemmeEntity;
}
