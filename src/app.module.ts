import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SlotsModule } from './slots/slots.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Slot } from './slots/slot.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    SlotsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sqlite3',
      entities: [Slot, User],
      logging: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
