import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, Repository } from 'typeorm';
import { AddUserDto } from './dto/add-user.dto';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
import { ConflictException } from '@nestjs/common';
import { UserCredentialsDto } from './dto/user-credentials.dto';
import { ResponsibleService } from 'src/responsible/responsible.service';
import { ResponsibleEntity } from 'src/responsible/responsible.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
    private connection: Connection,
    private responsibleService: Repository<ResponsibleEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async register(data: any) {
    const {
      username,
      email,
      password,
      responsibleName,
      responsibleLastName,
      firstNameResponsible,
      responsibleAdress,
      responsiblePhoneNumer,
      responsibleEmail,
      sexe,
    } = data;
    const newUser = { username, email, password };
    const responsable = {
      responsibleName,
      responsibleLastName,
      firstNameResponsible,
      responsibleAdress,
      responsiblePhoneNumer,
      responsibleEmail,
      sexe,
    };
    const user = await this.userRepository.create({ ...newUser });
    const responsableEntity = await this.responsibleService.create({
      ...responsable,
    });
    console.log(responsableEntity);
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    // console.dir(queryRunner);

    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);

    try {
      const rep = await queryRunner.manager.save(user);
      console.log('responsable:', rep);
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new Error('Une erreur est survenue');
    } finally {
      await queryRunner.release();
    }
    // Encript password

    // user.salt = await bcrypt.genSalt();
    // user.password = await bcrypt.hash(user.password, user.salt);
    // try {
    //   await this.userRepository.save(user);
    // } catch (e) {
    //   throw new ConflictException('Cet utilisateur existe déjà');
    // }
    return await {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  }

  async login(credetials: UserCredentialsDto) {
    const { username, password } = credetials;

    const user = await this.userRepository
      .createQueryBuilder('user')
      .andWhere('user.username=:username or user.email=:username')
      .setParameter('username', username)
      .getOne();
    if (!user) throw new NotFoundException('Cet Utilisateur existe déjà');

    const hashPassword = await bcrypt.hash(password, user.salt);
    if (hashPassword === user.password) {
      const payload = {
        id: user.id,
        username: user.username,
        email: user.password,
        roles: user.roles,
      };
      const jwt = await this.jwtService.sign(payload);
      return { jwt_token: jwt };
    } else {
      throw new NotFoundException('Mot de passe incorrect');
    }
  }
}
