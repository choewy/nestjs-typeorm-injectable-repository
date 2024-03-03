import { NestFactory } from '@nestjs/core';

import { SwaggerExModule } from '@extensions/swagger-ex';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerExModule.setup(app);

  await app.listen(3000);
}

bootstrap();
