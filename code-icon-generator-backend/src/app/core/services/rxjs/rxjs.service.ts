import { Injectable } from '@nestjs/common';
import { Rxjs } from '@workspace/rxjs/interfaces';
import { firstValueFrom, map, mergeMap, switchMap, tap, zip } from 'rxjs';

@Injectable ()
export class RxjsService
  implements
    Pick<
      Rxjs,
      'firstValueFrom' | 'map' | 'mergeMap' | 'tap' | 'switchMap' | 'zip'
    >
{
  public readonly firstValueFrom = firstValueFrom;
  public readonly map = map;
  public readonly mergeMap = mergeMap;
  public readonly switchMap = switchMap;
  public readonly tap = tap;
  public readonly zip = zip;
}
