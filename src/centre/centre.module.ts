import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentreController } from './centre.controller';
import { CentreEntity } from './centre.entity';
import { CentreService } from './centre.service';

@Module({
  imports: [TypeOrmModule.forFeature([CentreEntity])],
  controllers: [CentreController],
  providers: [CentreService]
})
export class CentreModule {}
