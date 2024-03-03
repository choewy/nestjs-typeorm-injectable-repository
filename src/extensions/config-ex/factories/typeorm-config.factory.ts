import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigFactory {
  constructor(private readonly configService: ConfigService) {}

  getTypeOrmModuleOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get<'mysql'>('TYPEORM_TYPE'),
      host: this.configService.get<string>('TYPEORM_HOST'),
      port: this.configService.get<number>('TYPEORM_PORT'),
      username: this.configService.get<string>('TYPEORM_USERNAME'),
      password: this.configService.get<string>('TYPEORM_PASSWORD'),
      database: this.configService.get<string>('TYPEORM_DATABASE'),
      synchronize: this.configService.get<string>('TYPEORM_SYNCHRONIZE') === 'true',
      autoLoadEntities: true,
      entities: ['./dist/**/*.entity.js'],
      migrations: ['./migrations/*.ts'],
      migrationsTableName: 'migrations',
    };
  }
}
