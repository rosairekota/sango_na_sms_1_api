import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { ChildEntity } from './child.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ChildEntity])],
  providers: [ChildService],
  controllers: [ChildController],
})
export class ChildModule {}
