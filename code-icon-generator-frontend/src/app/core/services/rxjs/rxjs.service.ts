import { Injectable } from '@angular/core';
import * as rxjs from 'rxjs';

@Injectable ()
export class RxjsService {
  public readonly firstValueFrom = rxjs.firstValueFrom;
}
