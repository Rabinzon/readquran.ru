import { Controller, Get, Render, Query } from '@nestjs/common';
import { ChapterService } from './chapter/chapter.service';
import Cookies from './cookies';

@Controller()
export class AppController {
  constructor(private readonly service: ChapterService) {}

  @Get()
  @Render('index')
  async getAll() {
    const chapters = await this.service.getAll();

    return {
      chapters,
    };
  }
  @Get('/search')
  @Render('search')
  async search(
    @Query('query') query: string,
    @Cookies('translationId') translationId = '1',
  ) {
    return {
      query,
      verses: await this.service.search(query, Number(translationId)),
    };
  }
}
