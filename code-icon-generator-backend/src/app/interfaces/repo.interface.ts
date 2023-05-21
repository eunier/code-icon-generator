import { Tree } from 'app/interfaces/tree.interface';

export interface Repo {
  sha: string;
  tree: Tree[];
  truncated: boolean;
  url: string;
}
