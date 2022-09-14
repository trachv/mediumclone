import { ArticleEntity } from '../atricle.entity';

export type ArticleType = Omit<ArticleEntity, 'updateTimestamp'>;
