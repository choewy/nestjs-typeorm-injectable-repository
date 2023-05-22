import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1684762253894 implements MigrationInterface {
  name = 'Migration1684762253894';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`item\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL COMMENT 'Delete Timestamp'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`item\` CHANGE \`deletedAt\` \`deletedAt\` timestamp(6) NULL COMMENT 'Update Timestamp'`,
    );
  }
}
