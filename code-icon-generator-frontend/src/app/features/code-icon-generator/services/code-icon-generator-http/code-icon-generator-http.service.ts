import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '@workspace/code-icon-generator/interfaces';
import { Observable } from 'rxjs';

@Injectable ()
export class CodeIconGeneratorHttpService {
  public constructor (private readonly _http: HttpClient) {}

  public getIcons (): Observable<File[]> {
    // return of (JSON.parse (`[{"sha":"e390b124a6b8f9cc4aa7eddb7ad2283bb3d23cf4","node_id":"MDQ6QmxvYjY3ODMxMzcyOmUzOTBiMTI0YTZiOGY5Y2M0YWE3ZWRkYjdhZDIyODNiYjNkMjNjZjQ=","size":8,"url":"https://api.github.com/repos/PKief/vscode-material-icon-theme/git/blobs/e390b124a6b8f9cc4aa7eddb7ad2283bb3d23cf4","content":"YnVpbGQvKio=\\n","encoding":"base64"},{"sha":"e5b327c3e23cdd4c424568af933b760ec67b485a","node_id":"MDQ6QmxvYjY3ODMxMzcyOmU1YjMyN2MzZTIzY2RkNGM0MjQ1NjhhZjkzM2I3NjBlYzY3YjQ4NWE=","size":1072,"url":"https://api.github.com/repos/PKief/vscode-material-icon-theme/git/blobs/e5b327c3e23cdd4c424568af933b760ec67b485a","content":"ewogICJleHRlbmRzIjogWyJwbHVnaW46cHJldHRpZXIvcmVjb21tZW5kZWQi\\nXSwKICAiZW52IjogewogICAgImJyb3dzZXIiOiB0cnVlLAogICAgImVzNiI6\\nIHRydWUsCiAgICAibm9kZSI6IHRydWUKICB9LAogICJwYXJzZXIiOiAiQHR5\\ncGVzY3JpcHQtZXNsaW50L3BhcnNlciIsCiAgInBhcnNlck9wdGlvbnMiOiB7\\nCiAgICAicHJvamVjdCI6ICJ0c2NvbmZpZy5qc29uIiwKICAgICJzb3VyY2VU\\neXBlIjogIm1vZHVsZSIKICB9LAogICJwbHVnaW5zIjogWyJAdHlwZXNjcmlw\\ndC1lc2xpbnQiXSwKICAicnVsZXMiOiB7CiAgICAiQHR5cGVzY3JpcHQtZXNs\\naW50L25hbWluZy1jb252ZW50aW9uIjogWwogICAgICAiZXJyb3IiLAogICAg\\nICB7CiAgICAgICAgInNlbGVjdG9yIjogInZhcmlhYmxlIiwKICAgICAgICAi\\nZm9ybWF0IjogWyJjYW1lbENhc2UiXQogICAgICB9CiAgICBdLAogICAgIkB0\\neXBlc2NyaXB0LWVzbGludC9wcmVmZXItbmFtZXNwYWNlLWtleXdvcmQiOiAi\\nZXJyb3IiLAogICAgIm5vLXRyYWlsaW5nLXNwYWNlcyI6ICJlcnJvciIsCiAg\\nICAiY2FtZWxjYXNlIjogImVycm9yIiwKICAgICJwcmVmZXItY29uc3QiOiAi\\nZXJyb3IiLAogICAgImVxZXFlcSI6IFsiZXJyb3IiLCAic21hcnQiXSwKICAg\\nICJpZC1ibGFja2xpc3QiOiBbCiAgICAgICJlcnJvciIsCiAgICAgICJhbnki\\nLAogICAgICAiTnVtYmVyIiwKICAgICAgIm51bWJlciIsCiAgICAgICJTdHJp\\nbmciLAogICAgICAic3RyaW5nIiwKICAgICAgIkJvb2xlYW4iLAogICAgICAi\\nYm9vbGVhbiIsCiAgICAgICJVbmRlZmluZWQiCiAgICBdLAogICAgImlkLW1h\\ndGNoIjogImVycm9yIiwKICAgICJuby1ldmFsIjogImVycm9yIiwKICAgICJu\\nby11bmRlcnNjb3JlLWRhbmdsZSI6ICJlcnJvciIsCiAgICAibm8tdW5zYWZl\\nLWZpbmFsbHkiOiAiZXJyb3IiLAogICAgIm5vLXZhciI6ICJlcnJvciIsCiAg\\nICAic3BhY2VkLWNvbW1lbnQiOiAiZXJyb3IiLAogICAgInByZXR0aWVyL3By\\nZXR0aWVyIjogWwogICAgICAiZXJyb3IiLAogICAgICB7CiAgICAgICAgImVu\\nZE9mTGluZSI6ICJhdXRvIgogICAgICB9CiAgICBdCiAgfQp9Cg==\\n","encoding":"base64"}]`));

    // return of (
    //   [
    //     'PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3Lncz\nLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDE2LjVjMCAuMzgtLjIxLjcx\nLS41My44OGwtNy45IDQuNDRjLS4xNi4xMi0uMzYuMTgtLjU3LjE4cy0uNDEt\nLjA2LS41Ny0uMThsLTcuOS00LjQ0QS45OTEuOTkxIDAgMCAxIDMgMTYuNXYt\nOWMwLS4zOC4yMS0uNzEuNTMtLjg4bDcuOS00LjQ0Yy4xNi0uMTIuMzYtLjE4\nLjU3LS4xOHMuNDEuMDYuNTcuMThsNy45IDQuNDRjLjMyLjE3LjUzLjUuNTMu\nODh2OU0xMiA0LjE1IDYuMDQgNy41IDEyIDEwLjg1bDUuOTYtMy4zNUwxMiA0\nLjE1TTUgMTUuOTFsNiAzLjM4di02LjcxTDUgOS4yMXY2LjdtMTQgMHYtNi43\nbC02IDMuMzd2Ni43MXoiIHN0eWxlPSJmaWxsOiMyOWI2ZjYiLz48L3N2Zz4=\n',
    //     'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdC\nb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzLjI5NSAxMS4wMzNWNy42NWwy\nLjEyNi0yLjEzNmMuNzc0LS43NjMuOTE5LTEuOTgxLjM3Ny0yLjkyOWEyLjM4\nNSAyLjM4NSAwIDAgMC0yLjA2OC0xLjIxN2MtLjIwMyAwLS40MzUuMDI5LS42\nMTkuMDg3LTEuMDQ0LjI4LTEuNzQ5IDEuMjQ2LTEuNzQ5IDIuMzN2My4xM0w4\nLjMyNyA5Ljk4YTUuNzQ3IDUuNzQ3IDAgMCAwLTEuMjA4IDYuMjE0IDUuNjIz\nIDUuNjIzIDAgMCAwIDQuMjQzIDMuNDMydi41OWEuNDk4LjQ5OCAwIDAgMS0u\nNDgzLjQ4MmgtMS40NXYxLjkzNGgxLjQ1YTIuNDMgMi40MyAwIDAgMCAyLjQx\nNi0yLjQxN3YtLjQ4M2MxLjk2MiAwIDQuMDItMS44NTYgNC4wMi00LjU5MSAw\nLTIuMjIzLTEuODU1LTQuMTA4LTQuMDItNC4xMDhtMC03LjI0OWMwLS4yMjIu\nMTA2LS4zOTYuMzEtLjQ1NGEuNDcuNDcgMCAwIDEgLjU0LjIyMi40ODIuNDgy\nIDAgMCAxLS4wNzcuNTlsLS43NzMuODNWMy43ODVtLTEuOTMzIDcuNzMyYy0u\nOTM4LjYxOS0xLjY0MyAxLjY4Mi0xLjg5NCAyLjY2OGwxLjg5NC41MDN2Mi45\nNDhhMy43MyAzLjczIDAgMCAxLTIuNDg0LTIuMTg1IDMuODAxIDMuODAxIDAg\nMCAxIC44MDItNC4wOThsMS42ODItMS43Njl2MS45MzNtMS45MzMgNi4yODN2\nLTQuODljMS4xMyAwIDIuMTA3IDEuMDYyIDIuMTA3IDIuMjMyIDAgMS42OTEt\nMS4yMjcgMi42NTgtMi4xMDcgMi42NTh6IiBmaWxsPSIjZmY1NzIyIi8+PC9z\ndmc+\n',
    //   ].map (
    //     (str): File => ({
    //       content: str,
    //       encoding: 'base64',
    //       node_id: '',
    //       sha: '',
    //       size: 1,
    //       url: '',
    //     }),
    //   ),
    // );

    return this._http.get<File[]> ('api/icons');
    // return this._http.get ('https://jsonplaceholder.typicode.com/posts/1')
  }
}
// [
//   '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15 6.04 7.5 12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71z" style="fill:#29b6f6"/></svg>',
//   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.295 11.033V7.65l2.126-2.136c.774-.763.919-1.981.377-2.929a2.385 2.385 0 0 0-2.068-1.217c-.203 0-.435.029-.619.087-1.044.28-1.749 1.246-1.749 2.33v3.13L8.327 9.98a5.747 5.747 0 0 0-1.208 6.214 5.623 5.623 0 0 0 4.243 3.432v.59a.498.498 0 0 1-.483.482h-1.45v1.934h1.45a2.43 2.43 0 0 0 2.416-2.417v-.483c1.962 0 4.02-1.856 4.02-4.591 0-2.223-1.855-4.108-4.02-4.108m0-7.249c0-.222.106-.396.31-.454a.47.47 0 0 1 .54.222.482.482 0 0 1-.077.59l-.773.83V3.785m-1.933 7.732c-.938.619-1.643 1.682-1.894 2.668l1.894.503v2.948a3.73 3.73 0 0 1-2.484-2.185 3.801 3.801 0 0 1 .802-4.098l1.682-1.769v1.933m1.933 6.283v-4.89c1.13 0 2.107 1.062 2.107 2.232 0 1.691-1.227 2.658-2.107 2.658z" fill="#ff5722"/></svg>',
// ];
// [
//   `b3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzLjI5NSAxMS4wMzNWNy42NWwy\n' +
//         'LjEyNi0yLjEzNmMuNzc0LS43NjMuOTE5LTEuOTgxLjM3Ny0yLjkyOWEyLjM4\n' +
//         'NSAyLjM4NSAwIDAgMC0yLjA2OC0xLjIxN2MtLjIwMyAwLS40MzUuMDI5LS42\n' +
//         'MTkuMDg3LTEuMDQ0LjI4LTEuNzQ5IDEuMjQ2LTEuNzQ5IDIuMzN2My4xM0w4\n' +
//         'LjMyNyA5Ljk4YTUuNzQ3IDUuNzQ3IDAgMCAwLTEuMjA4IDYuMjE0IDUuNjIz\n' +
//         'IDUuNjIzIDAgMCAwIDQuMjQzIDMuNDMydi41OWEuNDk4LjQ5OCAwIDAgMS0u\n' +
//         'NDgzLjQ4MmgtMS40NXYxLjkzNGgxLjQ1YTIuNDMgMi40MyAwIDAgMCAyLjQx\n' +
//         'Ni0yLjQxN3YtLjQ4M2MxLjk2MiAwIDQuMDItMS44NTYgNC4wMi00LjU5MSAw\n' +
//         'LTIuMjIzLTEuODU1LTQuMTA4LTQuMDItNC4xMDhtMC03LjI0OWMwLS4yMjIu\n' +
//         'MTA2LS4zOTYuMzEtLjQ1NGEuNDcuNDcgMCAwIDEgLjU0LjIyMi40ODIuNDgy\n' +
//         'IDAgMCAxLS4wNzcuNTlsLS43NzMuODNWMy43ODVtLTEuOTMzIDcuNzMyYy0u\n' +
//         'OTM4LjYxOS0xLjY0MyAxLjY4Mi0xLjg5NCAyLjY2OGwxLjg5NC41MDN2Mi45\n' +
//         'NDhhMy43MyAzLjczIDAgMCAxLTIuNDg0LTIuMTg1IDMuODAxIDMuODAxIDAg\n' +
//         'MCAxIC44MDItNC4wOThsMS42ODItMS43Njl2MS45MzNtMS45MzMgNi4yODN2\n' +
//         'LTQuODljMS4xMyAwIDIuMTA3IDEuMDYyIDIuMTA3IDIuMjMyIDAgMS42OTEt\n' +
//         'MS4yMjcgMi42NTgtMi4xMDcgMi42NTh6IiBmaWxsPSIjZmY1NzIyIi8+PC9z\n' +
//         'dmc+\n`,
//   'Lm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDE2LjVjMCAuMzgtLjIxLjcx\n' +
//     'LS41My44OGwtNy45IDQuNDRjLS4xNi4xMi0uMzYuMTgtLjU3LjE4cy0uNDEt\n' +
//     'LjA2LS41Ny0uMThsLTcuOS00LjQ0QS45OTEuOTkxIDAgMCAxIDMgMTYuNXYt\n' +
//     'OWMwLS4zOC4yMS0uNzEuNTMtLjg4bDcuOS00LjQ0Yy4xNi0uMTIuMzYtLjE4\n' +
//     'LjU3LS4xOHMuNDEuMDYuNTcuMThsNy45IDQuNDRjLjMyLjE3LjUzLjUuNTMu\n' +
//     'ODh2OU0xMiA0LjE1IDYuMDQgNy41IDEyIDEwLjg1bDUuOTYtMy4zNUwxMiA0\n' +
//     'LjE1TTUgMTUuOTFsNiAzLjM4di02LjcxTDUgOS4yMXY2LjdtMTQgMHYtNi43\n' +
//     'bC02IDMuMzd2Ni43MXoiIHN0eWxlPSJmaWxsOiMyOWI2ZjYiLz48L3N2Zz4=\n',
// ];
