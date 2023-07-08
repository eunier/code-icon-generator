import { Insertable, Selectable, Updateable } from 'kysely';
import { DatabaseSchema } from '../../../../db/interfaces/database-schema.interface';

export type TreeItemTable = DatabaseSchema['treeItem'];
export type TreeItem = Selectable<TreeItemTable>;
export type TreeItemCreate = Insertable<TreeItemTable>;
export type TreeItemUpdate = Updateable<TreeItemTable>;
