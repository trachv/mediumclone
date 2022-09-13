import { ArticleEntity } from '../atricle.entity';

export interface ArticlesResponseInterface {
  articles: ArticleEntity[];
  articlesCount: number;
}
