import { Injectable } from '@nestjs/common';
import { Transaction } from 'kysely';
import { DatabaseSchema } from '../../../../../db/interfaces/database-schema.interface';
import { Database } from '../../../../../db/interfaces/database.interface';
import { DatabaseService } from '../../../../shared/services/database/database.service';
import { GitRepo, GitRepoCreate } from '../../entities/git-repo.entity';

@Injectable ()
export class GitRepoRepository {
  private readonly _db: Database;

  public constructor (dbService: DatabaseService) {
    this._db = dbService.database;
  }

  public async create (
    newGitRepo: GitRepoCreate,
    transaction: Transaction<DatabaseSchema>,
  ): Promise<GitRepo> {
    const res = await transaction
      .insertInto ('gitRepo')
      .values (newGitRepo)
      .returningAll ()
      .executeTakeFirstOrThrow ();

    return res;
  }

  public async has (options: { url: string }): Promise<boolean> {
    const gitRepo = await this._db
      .selectFrom ('gitRepo')
      .where ('url', '=', options.url)
      .executeTakeFirst ();

    const res = gitRepo !== undefined;
    return res;
  }
}
