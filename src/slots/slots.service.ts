import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slot } from './slot.entity';
import { User } from '../users/users.service';

@Injectable()
export class SlotsService {
  constructor(
    @InjectRepository(Slot)
    private slotRepository: Repository<Slot>,
  ) { }

  findAll(): Promise<Slot[]> {
    return this.slotRepository.find();
  }

  findOne(id: string): Promise<Slot> {
    return this.slotRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.slotRepository.delete(id);
  }

  async fetch(user: User): Promise<Slot[] | undefined> {
    return this.findAll();
  }
}
