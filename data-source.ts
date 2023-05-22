import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: './envs/.env.typeorm' });

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get('TYPEORM_HOST'),
  port: configService.get<number>('TYPEORM_PORT'),
  username: configService.get('TYPEORM_USERNAME'),
  password: configService.get('TYPEORM_PASSWORD'),
  database: configService.get('TYPEORM_DATABASE'),
  migrations: [configService.get('TYPEORM_MIGRATIONS')],
  migrationsTableName: configService.get('TYPEORM_MIGRATION_TABLE_NAME'),
  entities: [configService.get('TYPEORM_MIGRATION_ENTITIES')],
  synchronize: false,
});
