import { GitHubGetGitRepoTreeResponse } from './git-hub-get-git-repo-tree.response';

export interface GitHubGetGitRepoResponse {
  sha: string;
  tree: GitHubGetGitRepoTreeResponse[];
  truncated: boolean;
  url: string;
}
