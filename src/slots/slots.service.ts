import { Injectable } from '@nestjs/common';
import { User, UsersService } from '../users/users.service';

export type Slot = any;

@Injectable()
export class SlotsService {
  constructor(
    private usersService: UsersService,
  ) { }

  private readonly slots = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async fetch(user: User): Promise<Slot | undefined> {

    return user.organization;
  }
}
