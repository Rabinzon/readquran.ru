import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Chapter, Verse } from '@prisma/client';

@Injectable()
export class ChapterService {
  constructor(private db: DatabaseService) {}

  async get(id: number, translationId: number): Promise<Chapter> {
    return this.db.chapter.findUniqueOrThrow({
      where: { id },
      include: {
        verses: {
          where: {
            translationId,
          },
          include: {
            translation: true,
          },
          orderBy: {
            order: 'asc',
          },
        },
      },
    });
  }
  async getAll(): Promise<Array<Chapter>> {
    return this.db.chapter.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async search(query: string, translationId: number): Promise<Array<Verse>> {
    return this.db.$queryRaw`
        select 
            v.id,
            v.order, 
            v."chapterId", 
            v."translationId",
            ts_headline('russian', v.text, keywords, 'StartSel=<mark>,StopSel=</mark>,HighlightAll=true') as text,
            ts_rank(to_tsvector('russian', v.text), keywords) AS rank
        from plainto_tsquery('russian', ${query}) as keywords, "Verse" v
        where
            v."translationId" = ${translationId} 
            and to_tsvector('russian', v.text) @@ keywords
        order by rank desc;`;
  }
}
