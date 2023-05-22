import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1684761497715 implements MigrationInterface {
  name = 'Migration1684761497715';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_2f3f2831c9b37214309d23b07fd\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`created_at\` \`createdAt\` timestamp(6) NOT NULL COMMENT 'Create Timestamp' DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`created_at\``);
    await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`user_id\``);
    await queryRunner.query(`ALTER TABLE \`item\` ADD \`userId\` bigint UNSIGNED NULL COMMENT 'User PK'`);
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD \`createdAt\` timestamp(6) NOT NULL COMMENT 'Create Timestamp' DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_5369db3bd33839fd3b0dd5525d1\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`item\` DROP FOREIGN KEY \`FK_5369db3bd33839fd3b0dd5525d1\``);
    await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`createdAt\``);
    await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`userId\``);
    await queryRunner.query(`ALTER TABLE \`item\` ADD \`user_id\` bigint UNSIGNED NULL COMMENT 'User PK'`);
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD \`created_at\` timestamp(6) NOT NULL COMMENT 'Create Timestamp' DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`createdAt\` \`created_at\` timestamp(6) NOT NULL COMMENT 'Create Timestamp' DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`item\` ADD CONSTRAINT \`FK_2f3f2831c9b37214309d23b07fd\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
