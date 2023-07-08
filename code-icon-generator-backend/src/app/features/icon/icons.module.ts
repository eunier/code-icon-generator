import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoreModule } from '../../core/core.module';
import { DatabaseService } from '../../shared/services/database/database.service';
import { IconsController } from './controllers/icons.controller';
import { FileDataProgressRepository } from './repositories/file-data-progress/file-data-progress.repository';
import { FileDataRepository } from './repositories/file-data/file-data.repository';
import { GitRepoRepository } from './repositories/git-repo/git-repo.repository';
import { TreeItemRepository } from './repositories/tree-item/tree-item.repository';
import { GitHubApi } from './services/git-hub-api/git-hub-api.service';
import { IconService } from './services/icon/icon.service';
import { TaskService } from './services/task/task.service';

@Module ({
  controllers: [IconsController],
  imports: [CoreModule, HttpModule],
  providers: [
    DatabaseService,
    FileDataProgressRepository,
    FileDataRepository,
    GitHubApi,
    GitRepoRepository,
    IconService,
    TaskService,
    TreeItemRepository,
  ],
})
export class IconsModule {}
