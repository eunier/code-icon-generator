import { Controller, Get } from '@nestjs/common';
import { IconService } from '../services/icon/icon.service';

@Controller ('icons')
export class IconsController {
  public constructor (private readonly _service: IconService) {}

  @Get ()
  public async getIcons (): Promise<
    {
      content: string;
      path: string;
    }[]
  > {
    const res = await this._service.getIcons ();
    return res;
  }
}
