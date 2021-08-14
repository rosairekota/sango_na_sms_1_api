import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AireModule } from './aire/aire.module';
import { ZoneModule } from './zone/zone.module';
import { ProvinceModule } from './province/province.module';
import * as dotenv from 'dotenv';
import { CheckExistZoneMiddleware } from './middlewares/check-exist-zone.middleware';
import { CentreModule } from './centre/centre.module';
<<<<<<< HEAD
import { FemmeModule } from './femme/femme.module';
import { AntigenefemmeModule } from './antigenefemme/antigenefemme.module';
=======
import { ChildPeriodModule } from './child-period/child-period.module';
import { ChildAntigenModule } from './child-antigen/child-antigen.module';
import { ChildModule } from './child/child.module';

>>>>>>> c37b43a9494c0e6983c07bba538b04a72d11b3c7
dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_ADDON_HOST,
      port: parseInt(process.env.MYSQL_ADDON_PORT),
      username: process.env.MYSQL_ADDON_USER,
      password: process.env.MYSQL_ADDON_PASSWORD,
      database: process.env.MYSQL_ADDON_DB,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AireModule,
    ZoneModule,
    ProvinceModule,
    CentreModule,
<<<<<<< HEAD
    FemmeModule,
    AntigenefemmeModule,
=======
    ChildPeriodModule,
    ChildAntigenModule,
<<<<<<< HEAD
    ChildModule,
=======
>>>>>>> c37b43a9494c0e6983c07bba538b04a72d11b3c7
>>>>>>> a71e3abf72411a1c1479f546ec94f118a66f9e4b
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckExistZoneMiddleware).forRoutes(
      {
        path: '/api/zone/:id',
        method: RequestMethod.GET,
      },
      {
        path: '/api/zone/:id',
        method: RequestMethod.PUT,
      },
      {
        path: '/api/zone/:id',
        method: RequestMethod.DELETE,
      },
    );
  }
}
