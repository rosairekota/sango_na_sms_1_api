/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  ParseIntPipe,
  Body,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { AddUserDto } from './dto/add-user.dto';
import { UserCredentialsDto } from './dto/user-credentials.dto';
import { AddResponsibleDto } from 'src/responsible/dto/add-responsible.dto';
import { LogoutDto } from './dto/logout.dto';

@ApiTags('User:')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async signup(
    @Body() newUser: AddResponsibleDto,
  ): Promise<Partial<UserEntity>> {
    return await this.userService.register(newUser);
  }

  @Post('login')
  async signin(@Body() credentials: UserCredentialsDto) {
    return await this.userService.login(credentials);
  }

  @Delete('logout')
  async logout(@Body() jwtToken: LogoutDto) {
    return await this.userService.destroyToken(jwtToken);
  }

  @Get()
  async getAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }
}
