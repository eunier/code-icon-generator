import { Test, TestingModule } from '@nestjs/testing';
import { GitHubApi } from './git-hub-api.service';

describe ('GitHubApi', () => {
  let service: GitHubApi;

  beforeEach (async () => {
    const module: TestingModule = await Test.createTestingModule ({
      providers: [GitHubApi],
    }).compile ();

    service = module.get<GitHubApi> (GitHubApi);
  });

  it ('should be defined', () => {
    expect (service).toBeDefined ();
  });
});
