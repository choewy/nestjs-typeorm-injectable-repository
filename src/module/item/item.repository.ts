import { InjectableRepository, Item, IRepository } from '@app/core';
import { EntityManager, UpdateResult } from 'typeorm';

@InjectableRepository(Item)
export class ItemRepository extends IRepository<Item> {
  async increaseCount(id: number, item: Item, em?: EntityManager): Promise<UpdateResult> {
    return (em ? em.getRepository(Item) : this).update({ id }, item);
  }

  async decreaseCount(id: number, item: Item, em?: EntityManager): Promise<UpdateResult> {
    return (em ? em.getRepository(Item) : this).update({ id }, item);
  }
}
