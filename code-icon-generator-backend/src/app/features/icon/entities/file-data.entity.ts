import { Insertable, Selectable } from 'kysely';
import { DatabaseSchema } from '../../../../db/interfaces/database-schema.interface';

export type FileDataTable = DatabaseSchema['fileData'];
export type FileData = Selectable<FileDataTable>;
export type FileDataCreate = Insertable<FileDataTable>;
