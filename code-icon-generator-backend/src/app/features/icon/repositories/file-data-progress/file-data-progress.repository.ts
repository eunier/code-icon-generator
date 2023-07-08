import { Injectable } from '@nestjs/common';
import { Transaction } from 'kysely';
import { DatabaseSchema } from '../../../../../db/interfaces/database-schema.interface';

@Injectable ()
export class FileDataProgressRepository {
  public async updateProgress (
    transaction: Transaction<DatabaseSchema>,
  ): Promise<void> {
    const treeItemWithNullFileDataCountDbRes = await transaction
      .selectFrom ('treeItem')
      .where ('fileDataId', 'is', null)
      .select (transaction.fn.countAll ().as ('count'))
      .execute ();

    const treeItemWithNullFileDataCount =
      treeItemWithNullFileDataCountDbRes.at (0)?.count;

    const fileDataProgress = await transaction
      .selectFrom ('fileDataProgress')
      .select (['id', 'fileDataToFetch'])
      .execute ();

    if (treeItemWithNullFileDataCount !== undefined) {
      const fileDataToFetch = parseInt (
        treeItemWithNullFileDataCount.toString (),
      );

      if (fileDataProgress.length === 0) {
        await transaction
          .insertInto ('fileDataProgress')
          .values ({ fileDataToFetch })
          .execute ();
      } else {
        for (const [index, el] of fileDataProgress.entries ()) {
          if (index === 0) {
            if (parseInt (el.fileDataToFetch) !== fileDataToFetch) {
              await transaction
                .updateTable ('fileDataProgress')
                .where ('id', '=', el.id)
                .set ({ fileDataToFetch })
                .execute ();
            }

            continue;
          }

          await transaction
            .deleteFrom ('fileDataProgress')
            .where ('id', '=', el.id)
            .execute ();
        }
      }
    }
  }
}
