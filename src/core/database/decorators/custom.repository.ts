import { Type } from '@nestjs/common';

export const CustomRepository = <T>(entity: Type<T>): ClassDecorator => {
  return (repository) => {
    Reflect.defineMetadata(repository.name, entity, repository);
  };
};
