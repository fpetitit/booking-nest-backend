
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  room_name: string;

  @Column()
  start_time: number;

  @Column()
  user_id: number;

  @Column()
  organization: string;
}
