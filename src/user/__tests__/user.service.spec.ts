import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { UserEntity } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntityMock } from '../__mocks__/user.mock';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      {
        provide: getRepositoryToken(UserEntity),
        useValue: {
          findUserByEmail: jest.fn().mockResolvedValue(userEntityMock)
        },
      },
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should return user in findUserByEmail', async () => {
    const user = await service.findUserByEmail(userEntityMock.email);
    expect(user).toEqual(userEntityMock);
  });
});
