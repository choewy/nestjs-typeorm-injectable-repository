import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

import { ConfigKey, ServerConfig } from './core';

export class Bootstrap {
  private readonly configService: ConfigService;
  private readonly config: ServerConfig;

  constructor(private readonly app: INestApplication) {
    this.configService = this.app.get(ConfigService);
    this.config = this.configService.get<ServerConfig>(ConfigKey.SERVER);
  }

  public static async run(m: any): Promise<void> {
    const bootstrap = new Bootstrap(await NestFactory.create(m));

    await bootstrap.docs();
    await bootstrap.uses();
    await bootstrap.listen();
  }

  async docs(): Promise<void> {
    return;
  }

  async uses(): Promise<void> {
    const limit = '2GB';

    this.app.use(json({ limit }));
    this.app.use(urlencoded({ limit, extended: true }));
    this.app.enableCors();
  }

  async listen(): Promise<void> {
    this.app.listen(this.config.port, this.config.host);
  }
}
