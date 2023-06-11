import { CustomRepository, RepositoryProvider, Item } from '@app/core';
import { FactoryProvider } from '@nestjs/common';
import { EntityManager, Repository, UpdateResult } from 'typeorm';

@CustomRepository(Item)
export class ItemRepository extends Repository<Item> {
  private static $provider: FactoryProvider;

  public static get provider(): FactoryProvider {
    if (!this.$provider) {
      this.$provider = RepositoryProvider(this);
    }

    return this.$provider;
  }

  async increaseCount(id: number, item: Item, em?: EntityManager): Promise<UpdateResult> {
    return (em ? em.getRepository(Item) : this).update({ id }, item);
  }

  async decreaseCount(id: number, item: Item, em?: EntityManager): Promise<UpdateResult> {
    return (em ? em.getRepository(Item) : this).update({ id }, item);
  }
}
