import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtConstant } from './jwt-constant';
import { UserInterface } from '../interfaces/user.interface';
import { UnauthorizedException } from '@nestjs/common';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secret: JwtConstant.JWT_SECRET_KEY,
    });
  }
  async validate(payload: UserInterface) {
    const user = await this.userRepository.findOne({
      username: payload.username,
    });
    delete user.password;
    delete user.salt;
    //Si le User exist on le retourne et automatiquement c'est ce qu'on retourne dans validate
    // est mis dans la Request

    //sinon, on declanche une exception
    if (!user)
      throw new UnauthorizedException(` Vous n'avez pas l'auhtorisation`);
    return user;
  }
}
