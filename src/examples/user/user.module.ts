import { Module } from '@nestjs/common';

import { TypeOrmExModule } from '@extensions/typeorm-ex';

import { UserRepository } from './repositories';
import { UserContorller } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmExModule.forFeature([UserRepository])],
  controllers: [UserContorller],
  providers: [UserService],
})
export class UserModule {}
