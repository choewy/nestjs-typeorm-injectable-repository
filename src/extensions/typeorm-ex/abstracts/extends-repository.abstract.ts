import { ObjectLiteral, Repository, DataSource, EntityTarget } from 'typeorm';

export abstract class ExtendsRepository<E extends ObjectLiteral> extends Repository<E> {
  constructor(readonly target: EntityTarget<E>, readonly dataSource: DataSource) {
    super(target, dataSource.createEntityManager());
  }

  get transaction() {
    return this.dataSource.transaction;
  }
}
