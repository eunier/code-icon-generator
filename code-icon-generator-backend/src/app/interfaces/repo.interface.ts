import { Trees } from "app/interfaces/tress.interface";


export interface Repo {
  sha: string;
  tree: Trees;
  truncated: boolean;
  url: string;
}
