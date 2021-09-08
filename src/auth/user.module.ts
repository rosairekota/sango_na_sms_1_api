/* eslint-disable prettier/prettier */
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
import { ChildEntity } from 'src/child/child.entity';
import { ChildService } from 'src/child/child.service';
import { ChildRegistrationEntity } from 'src/child-registration/child-registration.entity';
import { CentreEntity } from 'src/centre/centre.entity';
import { CentreService } from 'src/centre/centre.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ResponsibleEntity,ChildEntity,ChildRegistrationEntity,CentreEntity]),

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
  providers: [UserService,ResponsibleService,ChildService,ChildRegistrationEntity,CentreService],
  controllers: [UserController],
})
export class UserModule {}
