import { FactoryProvider, Type } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const CustomRepositoryProvider = <T>(repository: Type<T>): FactoryProvider => ({
  inject: [DataSource],
  provide: repository,
  useFactory(dataSource: DataSource) {
    const entity = Reflect.getMetadata(repository.name, repository);
    const queryRunner = dataSource.createQueryRunner();
    const entityManager = dataSource.createEntityManager(queryRunner);

    return new repository(entity, entityManager, queryRunner);
  },
});
