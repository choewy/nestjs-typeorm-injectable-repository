import { DataSource } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { ItemRepository } from '@app/module';
import { TestConfigModule, TestDatabaseModule } from '@app/core';

describe('ItemRepository', () => {
  let dataSource: DataSource;
  let repository: ItemRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule, TestDatabaseModule],
      providers: [ItemRepository.provider],
    }).compile();

    dataSource = module.get(DataSource);
    repository = module.get(ItemRepository);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('ItemRepository should be defined.', () => {
    expect(repository).toBeDefined();
  });

  it('ItemRepository.increaseCount should be defined.', async () => {
    expect(repository.increaseCount).toBeDefined();
  });

  it('ItemRepository.decreaseCount should be defined.', async () => {
    expect(repository.decreaseCount).toBeDefined();
  });

  it('Create Item should success.', async () => {
    const item = await repository.save(
      repository.create({
        name: 'item',
        count: 1,
      }),
    );

    expect(item.id).toBe(1);
  });
});
