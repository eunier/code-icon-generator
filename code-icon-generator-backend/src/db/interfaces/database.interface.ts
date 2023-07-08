import { Kysely } from 'kysely';
import { DatabaseSchema } from './database-schema.interface';

export type Database = Kysely<DatabaseSchema>;
