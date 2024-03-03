import { Module } from '@nestjs/common';

import { ConfigExModule, TypeOrmConfigFactory } from '@extensions/config-ex';
import { TypeOrmExModule } from '@extensions/typeorm-ex';

import { ExamplesModule } from './examples';

@Module({
  imports: [
    ConfigExModule.forRoot(),
    TypeOrmExModule.forRootAsync({
      imports: [ConfigExModule],
      inject: [TypeOrmConfigFactory],
      useFactory(factory: TypeOrmConfigFactory) {
        return factory.getTypeOrmModuleOptions();
      },
    }),
    ExamplesModule,
  ],
})
export class AppModule {}
