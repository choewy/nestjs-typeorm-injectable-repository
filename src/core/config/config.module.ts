import { ConfigModule } from '@nestjs/config';

import { ConfigPath } from './enums';
import { ConfigEnvs } from './config.envs';

const envs = ConfigEnvs.of();

export const GlobalConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: ConfigEnvs.makeFilePath(ConfigPath.SERVER, ConfigPath.TYPEORM),
  load: [envs.server, envs.typeorm],
});

export const TestConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: ConfigEnvs.makeFilePath(ConfigPath.SERVER, ConfigPath.TYPEORM_TEST),
  load: [envs.server, envs.typeormTest],
});
