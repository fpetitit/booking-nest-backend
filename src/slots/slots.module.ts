import { Module } from '@nestjs/common';
import { SlotsService } from './slots.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
  ],
  providers: [SlotsService],
  exports: [SlotsService],
})
export class SlotsModule { }
