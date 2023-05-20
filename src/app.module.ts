import { Module } from '@nestjs/common';
import { CoreModule } from './core';
import { ItemModule, UserModule } from './module';

@Module({
  imports: [CoreModule, UserModule, ItemModule],
})
export class AppModule {}
