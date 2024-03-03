import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmConfigFactory } from './factories';

@Module({})
export class ConfigExModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      imports: [ConfigModule.forRoot()],
      module: ConfigExModule,
      providers: [TypeOrmConfigFactory],
      exports: [TypeOrmConfigFactory],
    };
  }
}
