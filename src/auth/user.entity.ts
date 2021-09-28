import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { UserRoles } from './enum/roles.enum';

@Entity('utilisateur')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  roles: string;

  @Column({ default: false })
  status: boolean;

  @Column()
  token: string;

  @Column()
  expiredToken: number;
}
