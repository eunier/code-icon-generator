import { Injectable } from '@nestjs/common';
import { InjectDatabase } from '@workspace/nestjs-orm';
import { Database } from '../../../../db/interfaces/database.interface';

@Injectable()
export class DatabaseService {
  public constructor(
    @InjectDatabase() public readonly database: Database
  ) {}
}
