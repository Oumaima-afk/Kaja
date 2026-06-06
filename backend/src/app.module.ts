import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, EventsModule],
})
export class AppModule {}
