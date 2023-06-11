import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemRepository } from './item.repository';

@Module({
  providers: [ItemRepository.provider, ItemService],
  exports: [ItemRepository.provider, ItemService],
})
export class ItemModule {}
