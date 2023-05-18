import { Inject, Type } from '@nestjs/common';

export const InjectCustomRepository = <T>(repository: Type<T>) => Inject(repository);
