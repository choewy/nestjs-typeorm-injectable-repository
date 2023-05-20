import { Repository } from 'typeorm';
import { CustomRepository, RepositoryProvider, User } from '@app/core';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  public static get provider() {
    return RepositoryProvider(UserRepository);
  }

  async has(): Promise<boolean> {
    return (await this.count()) > 0;
  }
}
