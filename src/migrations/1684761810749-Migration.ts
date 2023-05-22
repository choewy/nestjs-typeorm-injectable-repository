import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1684761810749 implements MigrationInterface {
  name = 'Migration1684761810749';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD \`updatedAt\` timestamp(6) NOT NULL COMMENT 'Update Timestamp' DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`updatedAt\``);
  }
}
