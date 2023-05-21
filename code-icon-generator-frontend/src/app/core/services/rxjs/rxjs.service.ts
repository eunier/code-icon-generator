import { Injectable } from '@angular/core';
import { Rxjs } from '@workspace/rxjs/interfaces';
import { firstValueFrom, map } from 'rxjs';

@Injectable ()
export class RxjsService implements Pick<Rxjs, 'firstValueFrom' | 'map'> {
  public readonly firstValueFrom = firstValueFrom;
  public readonly map = map;
}
