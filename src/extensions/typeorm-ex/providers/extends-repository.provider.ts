import { DataSource } from 'typeorm';

import { FactoryProvider, Type } from '@nestjs/common';

import { TYPEORM_EX_INJECTABLE_REPOSITORY_ENTITY_KEY } from '../constants';
import { ExtendsRepository } from '../abstracts';

export const createExtendsRepositoryProvider = <R extends ExtendsRepository<any>>(
  IRepository: Type<R>,
): FactoryProvider => {
  return {
    inject: [DataSource],
    provide: IRepository,
    useFactory(dataSource: DataSource) {
      const entity = Reflect.getMetadata(TYPEORM_EX_INJECTABLE_REPOSITORY_ENTITY_KEY, IRepository);

      return new IRepository(entity, dataSource);
    },
  };
};
