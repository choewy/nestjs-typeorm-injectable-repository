import { ObjectLiteral } from 'typeorm';

import { Type } from '@nestjs/common';

import { TYPEORM_EX_INJECTABLE_REPOSITORY_ENTITY_KEY } from '../constants';

export const InjectableRepository = <T extends ObjectLiteral>(Entity: Type<T>): ClassDecorator => {
  return (target) => Reflect.defineMetadata(TYPEORM_EX_INJECTABLE_REPOSITORY_ENTITY_KEY, Entity, target);
};
