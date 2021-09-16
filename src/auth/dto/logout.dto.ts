import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LogoutDto {
  @IsNotEmpty()
  @ApiProperty()
  jwtToken: string;
}
