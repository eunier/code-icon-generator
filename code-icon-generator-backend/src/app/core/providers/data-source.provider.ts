import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const DATA_SOURCE_TOKEN = 'DATA_SOURCE_TOKEN';

export const dataSourceProvider: Provider = {
  provide: DATA_SOURCE_TOKEN,
  useFactory: async (): Promise<DataSource> => {
    const dataSource = new DataSource ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    });

    return dataSource.initialize ();
  },
};
