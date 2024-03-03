import { Injectable } from '@nestjs/common';

import { ItemRepository } from './repositories';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepository: ItemRepository) {}
}
