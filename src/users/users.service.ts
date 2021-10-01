
import { Injectable } from '@nestjs/common';

export class User {
  username: string;
  userId: number;
  organization: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      organization: 'coke',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      organization: 'pepsi',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
