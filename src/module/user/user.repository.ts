import { Repository } from 'typeorm';
import { CustomRepository, RepositoryProvider, User } from '@app/core';
import { FactoryProvider } from '@nestjs/common';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  public static provide(): FactoryProvider {
    return RepositoryProvider(this);
  }

  async has(): Promise<boolean> {
    return (await this.count()) > 0;
  }
}
