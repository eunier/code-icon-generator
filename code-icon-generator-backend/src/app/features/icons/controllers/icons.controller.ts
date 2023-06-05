import { Controller, Get } from '@nestjs/common';
import { TreeItem } from '@workspace/code-icon-generator/interfaces';
import { Observable } from 'rxjs';
import { IconsService } from '../services/icons/icons.service';

@Controller ('icons')
export class IconsController {
  public constructor (private readonly _service: IconsService) {}

  @Get ()
  public getIcons (): Observable<TreeItem[]> {
    return this._service.getIcons ();
  }
}
