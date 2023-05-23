import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NestjsRxjsModule } from '@workspace/nestjs-rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';

@Module ({
  imports: [HttpModule, CoreModule,NestjsRxjsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
