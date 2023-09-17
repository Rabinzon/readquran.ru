import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ChapterController } from './chapter/chapter.controller';
import { ChapterService } from './chapter/chapter.service';
import { VerseService } from './verse/verse.service';
import { DatabaseService } from './database/database.service';
import { DefaultCookieMiddleware } from './cookie.middleware';
import { VerseController } from './verse/verse.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
  ],
  controllers: [AppController, VerseController, ChapterController],
  providers: [AppService, ChapterService, DatabaseService, VerseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DefaultCookieMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.GET,
    });
  }
}
