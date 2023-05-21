import { CustomRepository, RepositoryProvider, Item } from '@app/core';
import { FactoryProvider } from '@nestjs/common';
import { EntityManager, Repository, UpdateResult } from 'typeorm';

@CustomRepository(Item)
export class ItemRepository extends Repository<Item> {
  public static provide(): FactoryProvider {
    return RepositoryProvider(this);
  }

  async increaseCount(id: number, item: Item, em?: EntityManager): Promise<UpdateResult> {
    return (em ? em.getRepository(Item) : this).update({ id }, item);
  }

  async decreaseCount(id: number, item: Item, em?: EntityManager): Promise<UpdateResult> {
    return (em ? em.getRepository(Item) : this).update({ id }, item);
  }
}
