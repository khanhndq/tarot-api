import { Injectable } from '@nestjs/common';
import { TarotCards } from 'src/data/tarot-data';
import { CreateTarotDto } from './dto/create-tarot.dto';
import { TarotDTO } from './dto/tarot.dto';
import { UpdateTarotDto } from './dto/update-tarot.dto';

@Injectable()
export class TarotService {
  private _loadData : TarotDTO[] = TarotCards ;
  findAll() {
    return this._loadData
  }

  async findOne(id: string, direction : number) {
    const findCard = await this._loadData.filter(data => data.id === id)
    return findCard[direction];
  }
  async random(){
    const randomId : string = String(Math.floor(Math.random() * 78) + 1);
    const direction : number = Math.floor(Math.random() * 2);
    return await this.findOne(randomId, direction);
  }
}
