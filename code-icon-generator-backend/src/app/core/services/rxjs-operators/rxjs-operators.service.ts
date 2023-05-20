import { Injectable } from '@nestjs/common';
import * as rxjsOperators from "@workspace/rxjs/operators";

@Injectable ()
export class RxjsOperatorsService {
  public readonly map = rxjsOperators.map
}

