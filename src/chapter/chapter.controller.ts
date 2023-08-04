import { Controller, Get, Param, Render } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { Chapter } from '@prisma/client';
import Cookies from '../cookies';
@Controller('surah')
export class ChapterController {
  constructor(private readonly service: ChapterService) {}

  @Get('/:id')
  @Render('chapter')
  get(
    @Param('id') id: string,
    @Cookies('translationId') translationId = '1',
  ): Promise<Chapter> {
    console.log({
      translationId,
    });
    return this.service.get(Number(id), Number(translationId));
  }
}
