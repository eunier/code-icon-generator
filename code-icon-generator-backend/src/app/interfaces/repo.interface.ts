import { ITree } from 'app/interfaces/tree.interface';

export interface IRepo {
  sha: string;
  tree: ITree[];
  truncated: boolean;
  url: string;
}
