import { Injectable } from '@angular/core';
import { Rxjs } from '@workspace/rxjs/interfaces';
import { firstValueFrom, map, tap } from 'rxjs';

@Injectable ()
export class RxjsService
  implements Pick<Rxjs, 'tap' | 'firstValueFrom' | 'map'>
{
  public readonly firstValueFrom = firstValueFrom;
  public readonly map = map;
  public readonly tap = tap;
}
