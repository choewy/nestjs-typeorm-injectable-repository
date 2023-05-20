import { FactoryProvider, Type } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const RepositoryProvider = <T>(Repository: Type<T>): FactoryProvider<T> => ({
  inject: [DataSource],
  provide: Repository,
  useFactory(dataSource: DataSource) {
    const Entity = Reflect.getMetadata(Repository.name, Repository);

    const queryRunner = dataSource.createQueryRunner();
    const entityManager = dataSource.createEntityManager(queryRunner);

    return new Repository(Entity, entityManager, queryRunner);
  },
});
