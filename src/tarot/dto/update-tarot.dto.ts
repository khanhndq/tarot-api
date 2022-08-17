import { PartialType } from '@nestjs/mapped-types';
import { CreateTarotDto } from './create-tarot.dto';

export class UpdateTarotDto extends PartialType(CreateTarotDto) {}
