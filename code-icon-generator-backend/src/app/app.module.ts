import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from 'app/app.controller';
import { CoreModule } from 'app/core/core.module';
import { AppService } from 'app/services/app.service';

@Module ({
  imports: [CoreModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
