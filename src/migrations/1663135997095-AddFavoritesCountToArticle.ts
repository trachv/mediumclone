import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFavoritesCountToArticle1663135997095 implements MigrationInterface {
    name = 'AddFavoritesCountToArticle1663135997095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" ADD "favoritesCount" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "favoritesCount"`);
    }

}
