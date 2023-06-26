import { UserEntity } from '../entities/user.entity';

export const userEntityMock: UserEntity = {
  id: 123,
  name: 'NameMock',
  email: 'email@example.com',
  password: 'password',
  phone: '779655155151',
  createdAt: new Date(),
  updatedAt: new Date(),
};
