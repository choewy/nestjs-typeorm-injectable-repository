import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 } from 'uuid';

import { UserRepository } from './repositories';
import { UserDto } from './dtos';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.find();

    return users.map((user) => new UserDto(user));
  }

  async createUser(): Promise<UserDto> {
    const user = this.userRepository.create({
      name: v4(),
    });

    await this.userRepository.insert(user);
    return new UserDto(user);
  }

  async updateUser(id: number): Promise<UserDto> {
    const user = await this.userRepository.findById(id);

    if (user === null) {
      throw new NotFoundException('not found user');
    }

    user.name = v4();

    await this.userRepository.update(id, user);

    return new UserDto(user);
  }

  async deleteUser(id: number): Promise<UserDto> {
    const user = await this.userRepository.findById(id);

    if (user === null) {
      throw new NotFoundException('not found user');
    }

    await this.userRepository.delete(id);

    return new UserDto(user);
  }
}
