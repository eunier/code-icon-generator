import { Controller, Get } from '@nestjs/common';
import { AppService } from 'app/services/app.service';

import { AxiosResponse } from 'axios';

@Controller ()
export class AppController {
  constructor (private readonly _service: AppService) {}

  @Get ()
  public getData (): { message: string } {
    return this._service.getData ();
  }

  @Get ('icons')
  public getIcons (): Promise<AxiosResponse<unknown, unknown>> {
    debugger;
    return this._service.getIcons ();
  }
}
