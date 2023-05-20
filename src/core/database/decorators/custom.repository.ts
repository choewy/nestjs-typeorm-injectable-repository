import { Type } from '@nestjs/common';
import { ObjectLiteral } from 'typeorm';

export const CustomRepository = <T extends ObjectLiteral>(Entity: Type<T>): ClassDecorator => {
  return (Repository) => {
    Reflect.defineMetadata(Repository.name, Entity, Repository);
  };
};
