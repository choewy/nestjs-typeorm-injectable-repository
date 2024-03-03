import { ApiResponseProperty } from '@nestjs/swagger';

import { User } from '../entities';
import { UserItemDto } from './user-item.dto';

export class UserDto {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: String })
  name: string;

  @ApiResponseProperty({ type: [UserItemDto] })
  items: UserItemDto[];

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.items = user.items ? user.items.map((item) => new UserItemDto(item)) : [];
  }
}
