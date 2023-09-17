import { Controller, Get, Param, Render } from '@nestjs/common';
import Cookies from '../cookies';
import { Chapter, Verse } from '@prisma/client';
import { VerseService } from './verse.service';

@Controller('/surah/:chapterId/ayat')
export class VerseController {
  constructor(private readonly service: VerseService) {}

  @Get(':id')
  @Render('verse')
  get(
    @Param('chapterId') chapterId: string,
    @Param('id') id: string,
  ): Promise<Chapter> {
    console.log({
      chapterId,
      id,
    });

    return this.service.get(Number(chapterId), Number(id));
  }
}
