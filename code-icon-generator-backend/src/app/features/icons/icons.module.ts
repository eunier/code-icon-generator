import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoreModule } from '../../core/core.module';
import { IconsController } from './icons.controller';
import { IconsService } from './icons.service';

@Module ({
  controllers: [IconsController],
  imports: [CoreModule, HttpModule],
  providers: [IconsService],
})
export class IconsModule {}
