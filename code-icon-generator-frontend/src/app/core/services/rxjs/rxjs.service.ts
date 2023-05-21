import { Injectable } from '@angular/core';
import { IRxjs } from '@workspace/rxjs/interfaces';
import { firstValueFrom, map } from 'rxjs';

@Injectable ()
export class RxjsService implements Pick<IRxjs, 'firstValueFrom' | 'map'> {
  public readonly firstValueFrom = firstValueFrom;
  public readonly map = map;
}
