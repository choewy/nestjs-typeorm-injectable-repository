import { Repository } from 'typeorm';

import { RepositoryProvider } from './providers';

export class IRepository<Entity> extends Repository<Entity> {
  public static get provider() {
    return RepositoryProvider(this);
  }
}
