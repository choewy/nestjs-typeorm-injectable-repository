import { CustomRepository, RepositoryProvider, Item } from '@app/core';
import { EntityManager, Repository, UpdateResult } from 'typeorm';

@CustomRepository(Item)
export class ItemRepository extends Repository<Item> {
  public static get provider() {
    return RepositoryProvider(ItemRepository);
  }

  async increaseCount(id: number, item: Item, em?: EntityManager): Promise<UpdateResult> {
    return (em ? em.getRepository(Item) : this).update({ id }, item);
  }

  async decreaseCount(id: number, item: Item, em?: EntityManager): Promise<UpdateResult> {
    return (em ? em.getRepository(Item) : this).update({ id }, item);
  }
}
