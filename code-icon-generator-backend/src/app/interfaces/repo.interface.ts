import { Trees } from '@workspace/code-icon-generator/interfaces';

export interface Repo {
  sha: string;
  tree: Trees;
  truncated: boolean;
  url: string;
}
