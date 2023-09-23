import { IRepository, InjectableRepository, User } from '@app/core';

@InjectableRepository(User)
export class UserRepository extends IRepository<User> {
  async has(): Promise<boolean> {
    return (await this.count()) > 0;
  }
}
