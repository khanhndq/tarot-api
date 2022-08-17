import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { TarotService } from './tarot.service';
import { CreateTarotDto } from './dto/create-tarot.dto';
import { UpdateTarotDto } from './dto/update-tarot.dto';
import { Request,Response } from 'express';

@Controller('tarot')
export class TarotController {
  constructor(private readonly tarotService: TarotService) {}

  @Get()
  findAll() {
    return this.tarotService.findAll();
  }

  @Get('random')
  async random(@Req() req : Request, @Res() res : Response) {
    const data = await this.tarotService.random()
    data.imageUrl = `${req.hostname}${data.imageUrl}`
    return res.send(data);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tarotService.findOne(id);
  // }
}
