import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1662818284136 implements MigrationInterface {
  name = 'SeedDb1662818284136';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')
      `);
    //password is 123
    await queryRunner.query(`
        INSERT INTO users (username,email, password) VALUES ('foo','foo@gmail.com', '$2b$10$J/vUst.KrvDvus3/uW0jn.GOUGer3E5VA5pxlr7RGKRFcNq8V78vK')
      `);
    await queryRunner.query(`
        INSERT INTO articles (slug, title, description, body, "tagList", "authorId") 
        VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee, dragons', 1)
      `);
    await queryRunner.query(`
        INSERT INTO articles (slug, title, description, body, "tagList", "authorId") 
        VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee, dragons', 1)
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
