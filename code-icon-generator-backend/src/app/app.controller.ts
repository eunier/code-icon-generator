import { Controller, Get } from '@nestjs/common';
import { AppService } from 'app/app.service';

@Controller ()
export class AppController {
  constructor (private readonly _service: AppService) {}

  @Get ()
  public getData (): { message: string } {
    return this._service.getData ();
  }

  @Get ('icons')
  public getIcons () {
    return this._service.getIcons ();
  }
}
