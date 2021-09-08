import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstant } from './strategy/jwt-constant';
import { ResponsibleEntity } from '../responsible/responsible.entity';
import { ResponsibleService } from 'src/responsible/responsible.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ResponsibleEntity]),

    // JWT configurations
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: JwtConstant.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  providers: [UserService,ResponsibleService],
  controllers: [UserController],
})
export class UserModule {}
