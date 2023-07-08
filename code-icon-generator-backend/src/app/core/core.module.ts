import { Module } from '@nestjs/common';
import { NestjsOrmModule } from '@workspace/nestjs-orm';
import { CamelCasePlugin } from 'kysely';
import databaseConfigDrizzle from '../../../drizzle.config';
import { Database } from '../../db/interfaces/database.interface';
@Module({
  imports: [
    NestjsOrmModule.forRoot<Database>({
      autoMigrate: true,
      dbCredentials: {
        database: databaseConfigDrizzle.dbCredentials.database,
        host: databaseConfigDrizzle.dbCredentials.host,
        password: databaseConfigDrizzle.dbCredentials.password,
        port: databaseConfigDrizzle.dbCredentials.port,
        user: databaseConfigDrizzle.dbCredentials.user,
      },
      driver: databaseConfigDrizzle.driver,
      out: databaseConfigDrizzle.out,
      projectRoot: 'apps/code-icon-generator-backend',
      schema: '',
      plugins: [new CamelCasePlugin()],
    }),
  ],
  providers: [],
  exports: [],
})
export class CoreModule {}
