import { Module } from '@nestjs/common';
import { NestjsRxjsModule } from '@workspace/nestjs/rxjs';
import { dataSourceProvider } from './providers/data-source.provider';

@Module ({
  imports: [NestjsRxjsModule],
  providers: [dataSourceProvider],
  exports: [NestjsRxjsModule],
})
export class CoreModule {}
