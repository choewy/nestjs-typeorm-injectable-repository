import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  providers: [UserRepository.provider, UserService],
})
export class UserModule {}
