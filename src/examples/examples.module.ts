import { Module } from '@nestjs/common';

import { UserModule } from './user';
import { ItemModule } from './item';

@Module({
  imports: [UserModule, ItemModule],
})
export class ExamplesModule {}
