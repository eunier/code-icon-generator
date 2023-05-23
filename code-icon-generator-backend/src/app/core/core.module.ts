import { Module } from '@nestjs/common';
import { NestjsRxjsModule } from '@workspace/nestjs-rxjs';

@Module ({ providers: [NestjsRxjsModule], exports: [NestjsRxjsModule] })
export class CoreModule {}
