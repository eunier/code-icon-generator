import { Controller, Get } from '@nestjs/common';
import { AppService } from 'app/app.service';
import { Tree } from 'app/interfaces/tree.interface';
import { Observable } from 'rxjs';

@Controller ()
export class AppController {
  constructor (private readonly _service: AppService) {}

  @Get ()
  public getData (): { message: string } {
    return this._service.getData ();
  }

  @Get ('icons')
  public getIcons () :Observable<Tree[]>{
    return this._service.getIcons ();
  }
}
