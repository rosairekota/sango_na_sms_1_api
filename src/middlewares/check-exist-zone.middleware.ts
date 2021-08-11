import { Injectable, NestMiddleware, ParseIntPipe } from '@nestjs/common';
import { ZoneService } from '../zone/zone.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CheckExistZoneMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('CheckExist zone id');

    // if (!zone) throw new NotFoundException('cette zone est inexistante ');
    next();
  }
}
