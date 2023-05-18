import { Repository } from 'typeorm';
import { CustomRepository, User, UserCreateEntity } from '@app/core';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async has(): Promise<boolean> {
    return (await this.count()) > 0;
  }

  async init(): Promise<void> {
    await this.insert(UserCreateEntity.of('choewy'));
  }
}
