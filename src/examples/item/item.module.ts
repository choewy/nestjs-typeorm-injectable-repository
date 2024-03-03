import { Module } from '@nestjs/common';

import { TypeOrmExModule } from '@extensions/typeorm-ex';

import { ItemRepository } from './repositories';
import { ItemService } from './item.service';

@Module({
  imports: [TypeOrmExModule.forFeature([ItemRepository])],
  providers: [ItemService],
})
export class ItemModule {}
