import { Module } from '@nestjs/common';
import { NestjsRxjsModule } from '@workspace/nestjs/rxjs';

@Module ({
  imports: [NestjsRxjsModule],
  exports: [NestjsRxjsModule],
})
export class CoreModule {}
