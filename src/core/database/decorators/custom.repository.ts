import { Type } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';
import { RepositoryProvider } from '../providers';

export const InjectableRepository = <T extends ObjectLiteral>(Entity: Type<T>): ClassDecorator => {
  return (Repository) => {
    Reflect.defineMetadata(Repository.name, Entity, Repository);
  };
};

export class IRepository<Entity> extends Repository<Entity> {
  public static get provider() {
    return RepositoryProvider(this);
  }
}
