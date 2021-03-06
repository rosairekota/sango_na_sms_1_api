/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, Repository } from 'typeorm';
import { AddUserDto } from './dto/add-user.dto';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
import { ConflictException } from '@nestjs/common';
import { UserCredentialsDto } from './dto/user-credentials.dto';
import { ResponsibleEntity } from 'src/responsible/responsible.entity';
import { AddResponsibleDto } from 'src/responsible/dto/add-responsible.dto';
import { ResponsibleService } from 'src/responsible/responsible.service';
import { LogoutDto } from './dto/logout.dto';
import * as redis from 'redis';
import * as JWTR from 'jwt-redis';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
    private connection: Connection,
    @InjectRepository(ResponsibleEntity)
    private responsibleRepository: Repository<ResponsibleEntity>,

    private responsibleService: ResponsibleService,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async getExtraParameter(user: UserEntity): Promise<any> {
    switch (user.roles) {
      case 'responsable':
        return await this.responsibleService.findResponsibleByUser(user);
        break;
      default:
        break;
    }
  }
  async register(responsableDto: AddResponsibleDto) {
    const {
      responsibleName,
      responsibleLastName,
      firstNameResponsible,
      responsibleAdress,
      responsiblePhoneNumer,
      sexe,
      user,
    } = responsableDto;
    
    user.status=false;
    const userEntity = await this.userRepository.create({ ...user });

    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    // console.dir(queryRunner);

    userEntity.salt = await bcrypt.genSalt();
    userEntity.password = await bcrypt.hash(
      userEntity.password,
      userEntity.salt,
    );

    try {
      const userRepo = await queryRunner.manager.save(userEntity);
      console.log(userRepo);
      const responsableEntity = await this.responsibleRepository.create({
        ...{
          responsibleName,
          responsibleLastName,
          firstNameResponsible,
          responsibleAdress,
          responsiblePhoneNumer,
          sexe,
        },
      });
      responsableEntity.user = { ...userRepo };
      console.log('roles');
      console.log(userRepo.roles);
      await queryRunner.manager.save(responsableEntity);
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new Error('Une erreur est survenue');
    } finally {
      await queryRunner.release();
    }
    // Encript password

    return await {
      id: user.id,
      username: user.username,
      email: user.email,
      status: user.status
    };
  }

  async login(credetials: UserCredentialsDto) {
    const { username, password } = credetials;

    const user = await this.userRepository
      .createQueryBuilder('user')
      .andWhere('user.username=:username or user.email=:username')
      .setParameter('username', username)
      .getOne();
    if (!user) throw new NotFoundException('Cet Utilisateur existe d??j??');

    const hashPassword = await bcrypt.hash(password, user.salt);


    if (hashPassword === user.password) {
      user.status = true;
      const userStatusUpdated = await this.userRepository.save(user);
      const userType = await this.getExtraParameter(userStatusUpdated);
      const payload = {
        userType: userType,
        id: user.id,
        username: user.username,
        email: user.email,
        roles: user.roles,
        status: user.status,
      };

      const jwt = await this.jwtService.sign(payload);
      return { jwt_token: jwt };
    } else {
      throw new NotFoundException('Mot de passe incorrect');
    }
  }
  async destroyToken(newLogoutDto: LogoutDto) {
    const redisClient = redis.createClient();
    const jwtr = new JWTR.default(redisClient);
    const { jwtToken } = newLogoutDto;
    const jwt = await jwtr.destroy(jwtToken);
    if (!jwt) throw new NotFoundException('Ce token est invalide!');
    else {
      console.log('deconnexion:', jwt);
    }

    return true;
  }
}