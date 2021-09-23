/* eslint-disable prettier/prettier */
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
export default abstract class TimesTempEntity {
  @CreateDateColumn({ update: false})
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
