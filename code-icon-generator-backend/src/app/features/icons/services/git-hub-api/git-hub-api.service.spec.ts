import { Test, TestingModule } from '@nestjs/testing';
import { GitHubApiService } from './git-hub-api.service';

describe ('GitHubApiService', () => {
  let service: GitHubApiService;

  beforeEach (async () => {
    const module: TestingModule = await Test.createTestingModule ({
      providers: [GitHubApiService],
    }).compile ();

    service = module.get<GitHubApiService> (GitHubApiService);
  });

  it ('should be defined', () => {
    expect (service).toBeDefined ();
  });
});
