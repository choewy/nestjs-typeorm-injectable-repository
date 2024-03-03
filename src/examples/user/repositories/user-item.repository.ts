import { v4 } from 'uuid';

import { ExtendsRepository, InjectableRepository } from '@extensions/typeorm-ex';

import { Item } from '@examples/item';

@InjectableRepository(Item)
export class UserItemRepository extends ExtendsRepository<Item> {
  async createDefault(userId: number): Promise<Item> {
    const item = this.create({
      user: { id: userId },
      name: v4(),
      count: 10,
    });

    await this.insert(item);

    return item;
  }
}
