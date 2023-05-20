import { Module } from '@nestjs/common';
import { ServicesModule } from 'app/core/services/services.module';

@Module ({imports: [ServicesModule]})
export class CoreModule {}
