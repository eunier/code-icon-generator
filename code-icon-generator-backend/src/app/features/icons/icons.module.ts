import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from '../../core/core.module';
import { IconsController } from './controllers/icons.controller';
import { GitRepo } from './entities/git-repository.entity';
import { TreeItem } from './entities/tree-item.entity';
import { GitHubApiService } from './services/git-hub-api/git-hub-api.service';
import { IconsService } from './services/icons/icons.service';
import { TasksService } from './services/tasks/tasks.service';

@Module ({
  controllers: [IconsController],
  imports: [
    CoreModule,
    HttpModule,
    TypeOrmModule.forFeature ([GitRepo, TreeItem]),
  ],
  providers: [GitHubApiService, IconsService, TasksService],
})
export class IconsModule {}
