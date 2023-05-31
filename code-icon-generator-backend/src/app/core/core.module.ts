import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsRxjsModule } from '@workspace/nestjs/rxjs';
import { GitRepo } from '../features/icons/entities/git-repository.entity';
import { TreeItem } from '../features/icons/entities/tree-item.entity';

@Module ({
  imports: [
    NestjsRxjsModule,
    TypeOrmModule.forRoot ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'code_icon_generator',
      entities: [GitRepo, TreeItem],
      synchronize: true,
      logging: true,
    }),
  ],
  providers: [],
  exports: [NestjsRxjsModule],
})
export class CoreModule {}
