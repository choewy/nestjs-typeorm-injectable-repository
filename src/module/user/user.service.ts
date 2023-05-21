import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { ItemCreateEntity, User, UserCreateEntity } from '@app/core';

@Injectable()
export class UserService implements OnApplicationBootstrap {
  constructor(private readonly userRepository: UserRepository) {}

  async onApplicationBootstrap(): Promise<User> {
    if (await this.userRepository.has()) {
      return;
    }

    return this.userRepository.save(UserCreateEntity.of('choewy', [ItemCreateEntity.of('portion', 10)]));
  }
}
