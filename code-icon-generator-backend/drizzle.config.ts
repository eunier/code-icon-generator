import type { Config } from 'drizzle-kit';

export default {
  schema: './src/**/schema.ts',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    password: 'postgres',
    database: 'code_icon_generator',
    user: 'postgres',
  },
} satisfies Config;
