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
import { DatabaseService } from './database/database.service';
import { DefaultCookieMiddleware } from './cookie.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
  ],
  controllers: [AppController, ChapterController],
  providers: [AppService, ChapterService, DatabaseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DefaultCookieMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.GET,
    });
  }
}
