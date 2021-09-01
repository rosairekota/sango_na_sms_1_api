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
import { ChildModule } from './child/child.module';
import { WifeperiodModule } from './wifeperiod/wifeperiod.module';
import { WomanInscriptionModule } from './woman-inscription/woman-inscription.module';
import { ChildVaccinationModule } from './child-vaccination/child-vaccination.module';
import { WomanVaccinationModule } from './woman-vaccination/woman-vaccination.module';
import { ResponsibleModule } from './responsible/responsible.module';
import { ChildRegistrationModule } from './child-registration/child-registration.module';
import { ProfessionalModule } from './professional/professional.module';
import { FemmeModule } from './femme/femme.module';
import { ProvincialProfessionalModule } from './provincial-professional/provincial-professional.module';
import { CenterProfessionalModule } from './center-professional/center-professional.module';
import { UserModule } from './auth/user.module';
import { AntigenModule } from './antigen/antigen.module';
import { CalendarModule } from './calendar/calendar.module';

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
    AntigenModule,
    CentreModule,
    ChildModule,
    ChildRegistrationModule,
    ProfessionalModule,
    ChildVaccinationModule,
    ZoneModule,
    ProvinceModule,
    WomanInscriptionModule,
    WomanVaccinationModule,
    FemmeModule,
    WifeperiodModule,
    ResponsibleModule,
    ProvincialProfessionalModule,
    CenterProfessionalModule,
    UserModule,
    CalendarModule,
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
