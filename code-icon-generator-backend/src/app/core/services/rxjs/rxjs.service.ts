import { Injectable } from '@nestjs/common';
import * as rxjs from "@workspace/rxjs";

@Injectable ()
export class RxjsService {
  public readonly firstValueFrom = rxjs.firstValueFrom
}

