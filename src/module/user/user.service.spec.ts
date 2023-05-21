import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository, UserService } from '@app/module';
import { TestConfigModule, TestDatabaseModule } from '@app/core';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestConfigModule, TestDatabaseModule],
      providers: [UserRepository.provide(), UserService],
    }).compile();

    service = module.get(UserService);
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
