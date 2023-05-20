import { Module } from '@nestjs/common';
import { CoreModule, DatabaseModule } from './core';
import { ItemModule, UserModule } from './module';

@Module({
  imports: [CoreModule, DatabaseModule, UserModule, ItemModule],
})
export class AppModule {}
