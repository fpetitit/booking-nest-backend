import { Module } from '@nestjs/common';
import { SlotsService } from './slots.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slot } from './slot.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Slot])
  ],
  providers: [SlotsService],
  exports: [SlotsService],
})
export class SlotsModule { }
