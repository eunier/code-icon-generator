import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoreModule } from '../../core/core.module';
import { dataSourceProvider } from '../../core/providers/data-source.provider';
import { IconsController } from './controllers/icons.controller';
import { gitRepositoryProvider } from './providers/git-repository.provider';
import { IconsService } from './services/icons.service';

@Module ({
  controllers: [IconsController],
  imports: [CoreModule, HttpModule],
  providers: [IconsService, dataSourceProvider, gitRepositoryProvider],
})
export class IconsModule {}
