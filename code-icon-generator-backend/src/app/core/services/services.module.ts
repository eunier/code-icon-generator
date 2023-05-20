import { Module } from '@nestjs/common';
import { RxjsService } from 'app/core/services/rxjs/rxjs.service';

@Module ({
  providers: [RxjsService],
})
export class ServicesModule {}
