import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Numeric = ColumnType<string, string | number, string | number>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface FileData {
  id: Generated<string>;
  content: string;
  encoding: string;
  nodeId: string;
  sha: string;
  size: Numeric;
  url: string;
  createdAt: Generated<Timestamp | null>;
}

export interface FileDataProgress {
  fileDataToFetch: Numeric;
  id: Generated<string>;
  createdAt: Generated<Timestamp | null>;
}

export interface GitRepo {
  id: Generated<string>;
  sha: string;
  truncated: boolean;
  url: string;
  createdAt: Generated<Timestamp | null>;
}

export interface TreeItem {
  id: Generated<string>;
  mode: string;
  path: string;
  sha: string;
  size: Numeric;
  type: string;
  url: string;
  fileDataId: string | null;
  gitRepoId: string | null;
  createdAt: Generated<Timestamp | null>;
}

export interface DB {
  fileData: FileData;
  fileDataProgress: FileDataProgress;
  gitRepo: GitRepo;
  treeItem: TreeItem;
}
