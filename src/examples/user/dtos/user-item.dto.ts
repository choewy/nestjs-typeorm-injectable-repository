import { ApiResponseProperty } from '@nestjs/swagger';

import { Item } from '@examples/item';

export class UserItemDto {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: String })
  name: string;

  @ApiResponseProperty({ type: Number })
  count: number;

  constructor(item: Item) {
    this.id = item.id;
    this.name = item.name;
    this.count = item.count;
  }
}
