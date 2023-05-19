import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller ()
export class AppController {
  constructor (private readonly _service: AppService) {}

  @Get ()
  getData (): { message: string } {
    return this._service.getData ();
  }
}
