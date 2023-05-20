import { Module } from '@nestjs/common';

import { GlobalConfigModule } from './config';
import { DatabaseModule } from './database';

@Module({
  imports: [GlobalConfigModule, DatabaseModule],
})
export class CoreModule {}
