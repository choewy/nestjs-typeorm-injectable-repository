import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ConfigKey } from './enums';
import { ConfigEnvsInterface, ServerConfig } from './types';
import SnakeNamingStrategy from 'typeorm-naming-strategy';
import { LogLevel } from 'typeorm';

export class ConfigEnvs implements ConfigEnvsInterface {
  private static instance: ConfigEnvs;

  public static of() {
    if (!this.instance) {
      this.instance = new ConfigEnvs();
    }

    return this.instance;
  }

  get server() {
    return registerAs(
      ConfigKey.SERVER,
      (): ServerConfig => ({
        host: process.env.SERVER_HOST,
        port: parseInt(process.env.SERVER_PORT, 10),
      }),
    );
  }

  get typeorm() {
    return registerAs(
      ConfigKey.TYPEORM,
      (): TypeOrmModuleOptions => ({
        type: process.env.TYPEORM_TYPE as any,
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT, 10),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
        autoLoadEntities: true,
        entities: [process.env.TYPEORM_ENTITIES],
        namingStrategy: new SnakeNamingStrategy(),
        logging: ['true', 'false'].includes(process.env.TYPEORM_LOGGING)
          ? process.env.TYPEORM_LOGGING === 'true'
          : (process.env.TYPEORM_LOGGING.split(',') as LogLevel[]),
      }),
    );
  }
}
