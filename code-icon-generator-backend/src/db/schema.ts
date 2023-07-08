import * as Schema from 'drizzle-orm/pg-core';

export const gitRepoTable = Schema.pgTable ('git_repo', {
  id: Schema.uuid ('id').primaryKey ().defaultRandom (),
  sha: Schema.text ('sha').notNull (),
  truncated: Schema.boolean ('truncated').notNull (),
  url: Schema.text ('url').notNull (),
  createdAt: Schema.timestamp ('created_at').defaultNow (),
});

export const fileDataTable = Schema.pgTable ('file_data', {
  id: Schema.uuid ('id').primaryKey ().defaultRandom (),
  content: Schema.text ('content').notNull (),
  encoding: Schema.text ('encoding').notNull (),
  nodeId: Schema.text ('node_id').notNull (),
  sha: Schema.text ('sha').notNull (),
  size: Schema.numeric ('size').notNull (),
  url: Schema.text ('url').notNull (),
  createdAt: Schema.timestamp ('created_at').defaultNow (),
});

export const treeItemTable = Schema.pgTable ('tree_item', {
  id: Schema.uuid ('id').primaryKey ().defaultRandom (),
  mode: Schema.text ('mode').notNull (),
  path: Schema.text ('path').notNull (),
  sha: Schema.text ('sha').notNull (),
  size: Schema.numeric ('size').notNull (),
  type: Schema.text ('type').notNull (),
  url: Schema.text ('url').notNull (),
  fileDataId: Schema.uuid ('file_data_id').references (
    () => fileDataTable.id,
  ),
  gitRepoId: Schema.uuid ('git_repo_id').references (() => gitRepoTable.id),
  createdAt: Schema.timestamp ('created_at').defaultNow (),
});

export const fileDataProgress = Schema.pgTable ('file_data_progress', {
  fileDataToFetch: Schema.numeric ('file_data_to_fetch').notNull (),
  id: Schema.uuid ('id').primaryKey ().defaultRandom (),
  createdAt: Schema.timestamp ('created_at').defaultNow (),
});
