import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class ForgotPasswordDto {
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsOptional()
  @ApiProperty()
  token: string;
}
