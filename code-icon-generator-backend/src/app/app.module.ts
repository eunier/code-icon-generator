import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CoreModule } from './core/core.module';
import { IconsModule } from './features/icon/icons.module';

@Module ({
  imports: [CoreModule, HttpModule, IconsModule, ScheduleModule.forRoot ()],
})
export class AppModule {}
