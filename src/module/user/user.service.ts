import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService implements OnApplicationBootstrap {
  constructor(private readonly userRepository: UserRepository) {}

  async onApplicationBootstrap() {
    if (await this.userRepository.has()) {
      return;
    }

    return this.userRepository.init();
  }
}
