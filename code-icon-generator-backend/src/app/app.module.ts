import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from 'app/app.controller';

import { AppService } from 'app/app.service';
import { RxjsService } from './core/services/rxjs/rxjs.service';

@Module ({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, RxjsService],
})
export class AppModule {}
