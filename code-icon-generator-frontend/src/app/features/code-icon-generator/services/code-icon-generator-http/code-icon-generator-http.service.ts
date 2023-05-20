import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable ()
export class CodeIconGeneratorHttpService {
  constructor (private readonly _http: HttpClient) {}
  public getIcons () {
    return;
  }
}
