import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE_TOKEN } from '../../../core/providers/data-source.provider';
import { GitRepository } from '../entities/git-repository.entity';

export const GIT_REPOSITORY_REPOSITORY_TOKEN =
  'GIT_REPOSITORY_REPOSITORY_TOKEN';

export const gitRepositoryProvider: Provider = {
  provide: GIT_REPOSITORY_REPOSITORY_TOKEN,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository (GitRepository),
  inject: [DATA_SOURCE_TOKEN],
};
