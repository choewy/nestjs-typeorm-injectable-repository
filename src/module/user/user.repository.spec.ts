import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '@app/module';
import { TestConfigModule, TestDatabaseModule } from '@app/core';
import { DataSource } from 'typeorm';

describe('UserRepository', () => {
  let dataSource: DataSource;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule, TestDatabaseModule],
      providers: [UserRepository.provider],
    }).compile();

    dataSource = module.get(DataSource);
    repository = module.get(UserRepository);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('UserRepository should be defined.', () => {
    expect(repository).toBeDefined();
  });

  it('User count to be 0.', async () => {
    expect(await repository.count()).toBe(0);
  });

  it('User has flag to be false.', async () => {
    expect(await repository.has()).toBe(false);
  });
});
