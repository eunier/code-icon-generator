import { Tree } from '@workspace/code-icon-generator/interfaces';

export interface Repo {
  sha: string;
  tree: Tree[];
  truncated: boolean;
  url: string;
}
