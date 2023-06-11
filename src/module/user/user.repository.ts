import { Repository } from 'typeorm';
import { CustomRepository, RepositoryProvider, User } from '@app/core';
import { FactoryProvider } from '@nestjs/common';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  private static $provider: FactoryProvider;

  public static get provider(): FactoryProvider {
    if (!this.$provider) {
      this.$provider = RepositoryProvider(this);
    }

    return this.$provider;
  }

  async has(): Promise<boolean> {
    return (await this.count()) > 0;
  }
}
