import { resolve } from 'path';
import { ConfigModule } from '@nestjs/config';

import { ConfigPath } from './enums';
import { ConfigEnvs } from './config.envs';

const envs = ConfigEnvs.of();

export const GlobalConfigModule = ConfigModule.forRoot({
  envFilePath: Object.values(ConfigPath).map((path) => resolve(path)),
  isGlobal: true,
  load: [envs.server, envs.typeorm],
});

export const TestConfigModule = ConfigModule.forRoot({
  envFilePath: Object.values(ConfigPath).map((path) => resolve(path)),
  isGlobal: true,
  load: [envs.server, envs.typeormTest],
});
