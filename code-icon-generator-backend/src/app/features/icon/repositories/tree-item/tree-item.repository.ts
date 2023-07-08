import { Injectable } from '@nestjs/common';
import { InsertResult, Transaction, UpdateResult } from 'kysely';
import * as utils from 'lodash';
import { DatabaseSchema } from '../../../../../db/interfaces/database-schema.interface';
import { Database } from '../../../../../db/interfaces/database.interface';
import { DatabaseService } from '../../../../shared/services/database/database.service';
import {
  TreeItem,
  TreeItemCreate,
  TreeItemUpdate,
} from '../../entities/tree-item.entity';

@Injectable ()
export class TreeItemRepository {
  private readonly _db: Database;

  public constructor (dbService: DatabaseService) {
    this._db = dbService.database;
  }

  public async create (
    newTreeItems: TreeItemCreate[],
    transaction: Transaction<DatabaseSchema>,
  ): Promise<InsertResult[]> {
    const res = await transaction
      .insertInto ('treeItem')
      .values (newTreeItems)
      .execute ();

    return res;
  }

  public async getTreeDataPathFileDataContent (): Promise<
    {
      content: string;
      path: string;
    }[]
  > {
    const dbRes = await this._db
      .selectFrom ('treeItem')
      .distinctOn ('fileDataId')
      .innerJoin ('fileData', 'fileData.id', 'treeItem.fileDataId')
      .select (['treeItem.path', 'fileData.content'])
      .execute ();

    const res = utils.sortBy (dbRes, (el) => el.path);
    return res;
  }

  public async getWithNullFileData (options: {
    limit: number;
  }): Promise<Pick<TreeItem, 'id' | 'url'>[]> {
    const res = await this._db
      .selectFrom ('treeItem')
      .select (['id', 'url'])
      .where ('fileDataId', 'is', null)
      .limit (options.limit)
      .execute ();

    return res;
  }

  public async update (
    id: string,
    newValue: TreeItemUpdate,
    transaction: Transaction<DatabaseSchema>,
  ): Promise<UpdateResult> {
    const res = await transaction
      .updateTable ('treeItem')
      .set (newValue)
      .where ('id', '=', id)
      .executeTakeFirst ();

    return res;
  }
}
