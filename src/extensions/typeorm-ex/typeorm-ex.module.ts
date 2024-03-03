import { DynamicModule, FactoryProvider, Module, Type } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { createExtendsRepositoryProvider } from './providers';
import { ExtendsRepository } from './abstracts';

@Module({})
export class TypeOrmExModule {
  static forRoot(options?: TypeOrmModuleOptions): DynamicModule {
    return {
      imports: [TypeOrmModule.forRoot(options)],
      module: TypeOrmExModule,
    };
  }

  static forRootAsync(options?: TypeOrmModuleAsyncOptions): DynamicModule {
    return {
      imports: [TypeOrmModule.forRootAsync(options)],
      module: TypeOrmExModule,
    };
  }

  static forFeature(IRepositories: Type<ExtendsRepository<any>>[]): DynamicModule {
    const providers: FactoryProvider[] = [];

    for (const IRepository of IRepositories) {
      providers.push(createExtendsRepositoryProvider(IRepository));
    }

    return {
      module: TypeOrmExModule,
      providers: providers,
      exports: providers,
    };
  }
}
