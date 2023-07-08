import { Test, TestingModule } from '@nestjs/testing';
import { GitRepoRepository } from './git-repo.repository';

describe ('GitRepositoryService', () => {
  let service: GitRepoRepository;

  beforeEach (async () => {
    const module: TestingModule = await Test.createTestingModule ({
      providers: [GitRepoRepository],
    }).compile ();

    service = module.get<GitRepoRepository> (GitRepoRepository);
  });

  it ('should be defined', () => {
    expect (service).toBeDefined ();
  });
});
