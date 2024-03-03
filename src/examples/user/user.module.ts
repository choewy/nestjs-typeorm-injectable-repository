import { Module } from '@nestjs/common';

import { TypeOrmExModule } from '@extensions/typeorm-ex';

import { UserItemRepository, UserRepository } from './repositories';
import { UserContorller } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmExModule.forFeature([UserRepository, UserItemRepository])],
  controllers: [UserContorller],
  providers: [UserService],
})
export class UserModule {}
