import { ExtendsRepository, InjectableRepository } from '@extensions/typeorm-ex';

import { User } from '../entities';

@InjectableRepository(User)
export class UserRepository extends ExtendsRepository<User> {
  async findById(id: number): Promise<User | null> {
    return this.findOneBy({ id: id ?? null });
  }
}
