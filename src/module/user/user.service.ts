import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { ItemCreateEntity, UserCreateEntity } from '@app/core';

@Injectable()
export class UserService implements OnApplicationBootstrap {
  constructor(private readonly userRepository: UserRepository) {}

  async onApplicationBootstrap() {
    if (await this.userRepository.has()) {
      return;
    }

    await this.userRepository.save(UserCreateEntity.of('choewy', [ItemCreateEntity.of('portion', 10)]));
  }
}
