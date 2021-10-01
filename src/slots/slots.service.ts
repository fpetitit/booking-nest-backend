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

  findAllForOrganization(organization): Promise<Slot[]> {
    return this.slotRepository.createQueryBuilder("slot")
      .where("slot.organization = :organization", { organization })
      .getMany();
  }

  findOne(id: string): Promise<Slot> {
    return this.slotRepository.findOne(id);
  }

  async fetch(user: User): Promise<Slot[] | undefined> {
    return this.findAllForOrganization(user.organization);
  }

  async book(slotId: number, user: User): Promise<Slot[]> {
    const slot = await this.slotRepository.findOneOrFail(slotId);
    if (slot.user_id == null) {
      // user has right to book a slot only if it is not already booked
      slot.user_id = user.userId;
      await this.slotRepository.save(slot);
    }
    return this.findAll();
  }

  async unbook(slotId: number, user: User): Promise<Slot[]> {
    const slot = await this.slotRepository.findOneOrFail(slotId);
    if (slot.user_id == user.userId) {
      // user has right to unbook a slot only if it is booked by himself
      slot.user_id = null;
      await this.slotRepository.save(slot);
    }
    return this.findAll();
  }
}
