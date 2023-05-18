import { ConfigFactoryKeyHost } from '@nestjs/config';

import { ConfigKey } from './enums';

export type ConfigEnvsInterface = Record<ConfigKey, (() => unknown) & ConfigFactoryKeyHost<unknown>>;

export type ServerConfig = {
  host: string;
  port: number;
};
