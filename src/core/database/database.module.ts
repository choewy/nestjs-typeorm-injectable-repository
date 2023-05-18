import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigKey } from '../config';

export const DatabaseModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory(configService: ConfigService): TypeOrmModuleOptions {
    return configService.get<TypeOrmModuleOptions>(ConfigKey.TYPEORM);
  },
});
