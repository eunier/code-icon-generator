import { Insertable, Selectable } from 'kysely';
import { DatabaseSchema } from '../../../../db/interfaces/database-schema.interface';

export type GitRepoTable = DatabaseSchema['gitRepo'];
export type GitRepo = Selectable<GitRepoTable>;
export type GitRepoCreate = Insertable<GitRepoTable>;
