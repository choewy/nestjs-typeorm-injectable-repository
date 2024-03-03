import { ExtendsRepository, InjectableRepository } from '@extensions/typeorm-ex';

import { Item } from '../entities';

@InjectableRepository(Item)
export class ItemRepository extends ExtendsRepository<Item> {}
