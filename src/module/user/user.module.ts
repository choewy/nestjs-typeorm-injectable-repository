import { CustomRepositoryProvider, User } from '@app/core';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [CustomRepositoryProvider(UserRepository), UserService],
})
export class UserModule {}
