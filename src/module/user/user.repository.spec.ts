import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '@app/module';
import { TestConfigModule, TestDatabaseModule } from '@app/core';

describe('UserRepository', () => {
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule, TestDatabaseModule],
      providers: [UserRepository.provide()],
    }).compile();

    repository = module.get(UserRepository);
  });

  it('UserRepository should be defined.', () => {
    expect(repository).toBeDefined();
  });

  it('User count to be 0.', async () => {
    expect(await repository.count()).toBe(0);
  });

  it('User count to be less than 0.', async () => {
    expect(await repository.has()).toBe(false);
  });
});
