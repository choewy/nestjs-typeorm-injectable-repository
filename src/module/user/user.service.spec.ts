import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository, UserService } from '@app/module';
import { TestConfigModule, TestDatabaseModule } from '@app/core';
import { DataSource } from 'typeorm';

describe('UserService', () => {
  let dataSource: DataSource;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule, TestDatabaseModule],
      providers: [UserRepository.provider, UserService],
    }).compile();

    dataSource = module.get(DataSource);
    service = module.get(UserService);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('UserService should be defined.', () => {
    expect(service).toBeDefined();
  });

  it('Insert user and item on application bootstrap.', async () => {
    const user = await service.onApplicationBootstrap();

    expect(user.name).toBe('choewy');
    expect(user.items.length).toBe(1);
    expect(user.items[0].name).toBe('portion');
    expect(user.items[0].count).toBe(10);
  });
});
