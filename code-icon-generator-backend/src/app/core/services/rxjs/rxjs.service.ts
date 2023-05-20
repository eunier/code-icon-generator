import { Injectable } from '@nestjs/common';
import { IRxjs } from '@workspace/rxjs/interfaces';
import { firstValueFrom, map, mergeMap, tap } from 'rxjs';

@Injectable ()
export class RxjsService
  implements Pick<IRxjs, 'firstValueFrom' | 'map' | 'mergeMap' | 'tap'>
{
  public readonly firstValueFrom = firstValueFrom;
  public readonly map = map;
  public readonly mergeMap = mergeMap;
  public readonly tap = tap;
}
