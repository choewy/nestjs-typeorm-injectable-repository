import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1684762094058 implements MigrationInterface {
  name = 'Migration1684762094058';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`item\` ADD \`deletedAt\` timestamp(6) NULL COMMENT 'Update Timestamp'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`deletedAt\``);
  }
}
