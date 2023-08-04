import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DefaultCookieMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Check if the cookie already exists, if not, set the default value
    console.log(req.cookies.translationId);
    if (!req.cookies.translationId) {
      res.cookie('translationId', '1', { maxAge: 3600000, path: '' });
    }

    next();
  }
}
