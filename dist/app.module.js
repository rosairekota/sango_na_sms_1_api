"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const aire_module_1 = require("./aire/aire.module");
const zone_module_1 = require("./zone/zone.module");
const province_module_1 = require("./province/province.module");
const dotenv = require("dotenv");
const check_exist_zone_middleware_1 = require("./middlewares/check-exist-zone.middleware");
dotenv.config();
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(check_exist_zone_middleware_1.CheckExistZoneMiddleware).forRoutes({
            path: '/api/zone/:id',
            method: common_1.RequestMethod.GET,
        }, {
            path: '/api/zone/:id',
            method: common_1.RequestMethod.PUT,
        }, {
            path: '/api/zone/:id',
            method: common_1.RequestMethod.DELETE,
        });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.MYSQL_ADDON_HOST,
                port: parseInt(process.env.MYSQL_ADDON_PORT),
                username: process.env.MYSQL_ADDON_USER,
                password: process.env.MYSQL_ADDON_PASSWORD,
                database: process.env.MYSQL_ADDON_DB,
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            aire_module_1.AireModule,
            zone_module_1.ZoneModule,
            province_module_1.ProvinceModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map