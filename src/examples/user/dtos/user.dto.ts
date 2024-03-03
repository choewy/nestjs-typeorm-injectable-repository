import { ApiResponseProperty } from '@nestjs/swagger';

import { User } from '../entities';

export class UserDto {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: String })
  name: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
  }
}
