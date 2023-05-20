import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable ()
export class CodeIconGeneratorHttpService {
  constructor (private readonly _http: HttpClient) {}
  public getIcons (): Observable<unknown> {
    return this._http.get ('api/icons' );
    // return this._http.get ('https://jsonplaceholder.typicode.com/posts/1')
  }
}
