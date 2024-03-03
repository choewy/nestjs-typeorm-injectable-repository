import { v4 } from 'uuid';

import { ExtendsRepository, InjectableRepository } from '@extensions/typeorm-ex';

import { User } from '../entities';

@InjectableRepository(User)
export class UserRepository extends ExtendsRepository<User> {
  async createDefault(): Promise<User> {
    const user = this.create({ name: v4() });

    await this.insert(user);

    return user;
  }

  async findById(id: number): Promise<User | null> {
    return this.findOneBy({ id: id ?? null });
  }

  async findByIdWithItems(id: number): Promise<User | null> {
    return this.findOne({
      relations: { items: true },
      where: { id },
    });
  }
}
