import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerExModule {
  static setup(app: INestApplication) {
    const config = new DocumentBuilder().build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('swagger', app, document);
  }
}
