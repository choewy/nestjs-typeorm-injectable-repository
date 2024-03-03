import { ExtendsRepository, InjectableRepository } from '@extensions/typeorm-ex';

import { User } from '../entities';

@InjectableRepository(User)
export class UserRepository extends ExtendsRepository<User> {}
