import { Module } from '@nestjs/common';

import { TypeOrmExModule } from '@extensions/typeorm-ex';

import { UserRepository } from './repositories';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmExModule.forFeature([UserRepository])],
  providers: [UserService],
})
export class UserModule {}
