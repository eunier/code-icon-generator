/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import {
  HttpClient,
  HttpContext,
  HttpEvent,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as mocks from '@workspace/code-icon-generator/mocks';
import { Observable, of } from 'rxjs';

@Injectable ()
export class HttpClientMock<T = unknown> implements Partial<HttpClient> {
  public get (
    /* #region args */
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Observable<ArrayBuffer>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Observable<Blob>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      context?: HttpContext | undefined;
      observe?: 'body' | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Observable<string>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Observable<HttpEvent<ArrayBuffer>>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Observable<HttpEvent<Blob>>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Observable<HttpEvent<string>>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): // eslint-disable-next-line @typescript-eslint/ban-types
  Observable<HttpEvent<Object>>;
  public get<T>(
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'events';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Observable<HttpEvent<T>>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'arraybuffer';
      withCredentials?: boolean | undefined;
    }
  ): Observable<HttpResponse<ArrayBuffer>>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'blob';
      withCredentials?: boolean | undefined;
    }
  ): Observable<HttpResponse<Blob>>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType: 'text';
      withCredentials?: boolean | undefined;
    }
  ): Observable<HttpResponse<string>>;
  public get (
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): // eslint-disable-next-line @typescript-eslint/ban-types
  Observable<HttpResponse<Object>>;
  public get<T>(
    url: string,
    options: {
      headers?:
        | HttpHeaders
        | Record<string, string | string[]>
        | undefined;
      observe: 'response';
      context?: HttpContext | undefined;
      params?:
        | HttpParams
        | Record<
            string,
            | string
            | number
            | boolean
            | readonly (string | number | boolean)[]
          >
        | undefined;
      reportProgress?: boolean | undefined;
      responseType?: 'json' | undefined;
      withCredentials?: boolean | undefined;
    }
  ): Observable<HttpResponse<T>>;
  public get (
    url: string,
    options?:
      | {
          headers?:
            | HttpHeaders
            | Record<string, string | string[]>
            | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?:
            | HttpParams
            | Record<
                string,
                | string
                | number
                | boolean
                | readonly (string | number | boolean)[]
              >
            | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
        }
      | undefined
  ): // eslint-disable-next-line @typescript-eslint/ban-types
  Observable<Object>;
  public get<T>(
    url: string,
    options?:
      | {
          headers?:
            | HttpHeaders
            | Record<string, string | string[]>
            | undefined;
          context?: HttpContext | undefined;
          observe?: 'body' | undefined;
          params?:
            | HttpParams
            | Record<
                string,
                | string
                | number
                | boolean
                | readonly (string | number | boolean)[]
              >
            | undefined;
          reportProgress?: boolean | undefined;
          responseType?: 'json' | undefined;
          withCredentials?: boolean | undefined;
        }
      | undefined
  ): Observable<T>;
  public get (
    url: unknown,
    options?: unknown
  ):
    | import('rxjs').Observable<ArrayBuffer>
    | import('rxjs').Observable<Blob>
    | import('rxjs').Observable<string>
    | import('rxjs').Observable<
        import('@angular/common/http').HttpEvent<ArrayBuffer>
      >
    | import('rxjs').Observable<
        import('@angular/common/http').HttpEvent<Blob>
      >
    | import('rxjs').Observable<
        import('@angular/common/http').HttpEvent<string>
      >
    | import('rxjs').Observable<
        import('@angular/common/http').HttpResponse<ArrayBuffer>
      >
    | import('rxjs').Observable<
        import('@angular/common/http').HttpResponse<Blob>
      >
    | import('rxjs').Observable<
        import('@angular/common/http').HttpResponse<string>
      >
    | import('rxjs').Observable<
        import('@angular/common/http').HttpResponse<Object>
      >
    | import('rxjs').Observable<Object>
    | import('rxjs').Observable<
        // eslint-disable-next-line @typescript-eslint/ban-types
        import('@angular/common/http').HttpEvent<Object>
      >
    | import('rxjs').Observable<
        import('@angular/common/http').HttpEvent<T>
      >
    | import('rxjs').Observable<
        import('@angular/common/http').HttpResponse<T>
      >
    | import('rxjs').Observable<T>;
  /* #endregion */
  public get (
    url: unknown,
    options?: unknown,
  ): ReturnType<HttpClient['get']> {
    if (url === 'api/icons') {
      return of (mocks.files);
    }

    return of (null);
  }
}
