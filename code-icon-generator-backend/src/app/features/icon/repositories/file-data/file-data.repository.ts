import { Injectable } from '@nestjs/common';
import { InjectDatabase } from '@workspace/nestjs-orm';
import { Transaction } from 'kysely';
import { DatabaseSchema } from '../../../../../db/interfaces/database-schema.interface';
import { Database } from '../../../../../db/interfaces/database.interface';
import { FileData, FileDataCreate } from '../../entities/file-data.entity';

@Injectable ()
export class FileDataRepository {
  public constructor (@InjectDatabase () private readonly _db: Database) {}

  public create (
    newFileData: FileDataCreate,
    transaction: Transaction<DatabaseSchema>,
  ): Promise<Pick<FileData, 'id'> | undefined> {
    const res = transaction
      .insertInto ('fileData')
      .values (newFileData)
      .returning ('id')
      .executeTakeFirst ();
    return res;
  }

  public async getExisting (
    options: Pick<
      FileData,
      'content' | 'encoding' | 'nodeId' | 'sha' | 'size' | 'url'
    >,
  ): Promise<Pick<FileData, 'id'> | undefined> {
    const dbRes = await this._db
      .selectFrom ('fileData')
      .where ('encoding', '=', options.encoding)
      .where ('nodeId', '=', options.nodeId)
      .where ('sha', '=', options.sha)
      .where ('size', '=', options.size)
      .where ('url', '=', options.url)
      .select (['id', 'content'])
      .executeTakeFirst ();

    const res: Awaited<ReturnType<FileDataRepository['getExisting']>> =
      dbRes?.content === options.content ? { id: dbRes.id } : undefined;

    return res;
  }
}
