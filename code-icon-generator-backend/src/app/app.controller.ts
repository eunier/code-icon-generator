import { Controller, Get } from '@nestjs/common';
import { Tree } from '@workspace/code-icon-generator/interfaces';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller ()
export class AppController {
  constructor (private readonly _service: AppService) {}

  @Get ()
  public getData (): { message: string } {
    return this._service.getData ();
  }

  @Get ('icons')
  public getIcons (): Observable<Tree[]> {
    return this._service.getIcons ();
  }
}
