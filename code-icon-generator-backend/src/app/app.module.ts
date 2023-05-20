import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from 'app/app.controller';
import { RxjsOperatorsService } from 'app/core/services/rxjs-operators/rxjs-operators.service';
import { RxjsService } from 'app/core/services/rxjs/rxjs.service';
// import { CoreModule } from 'app/core/core.module';
import { AppService } from 'app/services/app.service';

@Module ({
  imports: [/*CoreModule*/ HttpModule],
  controllers: [AppController],
  providers: [AppService, RxjsService, RxjsOperatorsService],
})
export class AppModule {}
