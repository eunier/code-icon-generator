import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { IconsModule } from './features/icons/icons.module';

@Module ({
  imports: [CoreModule, HttpModule, IconsModule],
})
export class AppModule {}
