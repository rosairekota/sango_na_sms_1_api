import { Body, Controller, Get, Post } from '@nestjs/common';
import { AireEntity } from './aire.entity';
import { AireService } from './aire.service';
import { AddAireDto } from './dto/add-aire.dto';

@Controller('aire')
export class AireController {
  constructor(private aireService: AireService) {}

  @Get()
  async getAllAires(): Promise<AireEntity[]> {
    return await this.aireService.getAires();
  }

  @Post()
  async addAire(@Body() addAireDto: AddAireDto) {
    return await this.aireService.addAire(addAireDto);
  }
}
