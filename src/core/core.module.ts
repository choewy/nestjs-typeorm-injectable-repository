import { Module } from '@nestjs/common';

import { GlobalConfigModule } from './config';

@Module({
  imports: [GlobalConfigModule],
})
export class CoreModule {}
