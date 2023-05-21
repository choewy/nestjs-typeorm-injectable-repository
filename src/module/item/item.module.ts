import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemRepository } from './item.repository';

@Module({
  providers: [ItemRepository.provide(), ItemService],
  exports: [ItemRepository.provide(), ItemService],
})
export class ItemModule {}
