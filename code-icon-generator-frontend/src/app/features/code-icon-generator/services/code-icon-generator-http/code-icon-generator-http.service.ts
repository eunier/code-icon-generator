import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable ()
export class CodeIconGeneratorHttpService {
  constructor (private readonly _http: HttpClient) {}

  public getIcons (): Observable<unknown> {
    return of (JSON.parse ('[{"sha":"e390b124a6b8f9cc4aa7eddb7ad2283bb3d23cf4","node_id":"MDQ6QmxvYjY3ODMxMzcyOmUzOTBiMTI0YTZiOGY5Y2M0YWE3ZWRkYjdhZDIyODNiYjNkMjNjZjQ=","size":8,"url":"https://api.github.com/repos/PKief/vscode-material-icon-theme/git/blobs/e390b124a6b8f9cc4aa7eddb7ad2283bb3d23cf4","content":"YnVpbGQvKio=\n","encoding":"base64"},{"sha":"e5b327c3e23cdd4c424568af933b760ec67b485a","node_id":"MDQ6QmxvYjY3ODMxMzcyOmU1YjMyN2MzZTIzY2RkNGM0MjQ1NjhhZjkzM2I3NjBlYzY3YjQ4NWE=","size":1072,"url":"https://api.github.com/repos/PKief/vscode-material-icon-theme/git/blobs/e5b327c3e23cdd4c424568af933b760ec67b485a","content":"ewogICJleHRlbmRzIjogWyJwbHVnaW46cHJldHRpZXIvcmVjb21tZW5kZWQi\nXSwKICAiZW52IjogewogICAgImJyb3dzZXIiOiB0cnVlLAogICAgImVzNiI6\nIHRydWUsCiAgICAibm9kZSI6IHRydWUKICB9LAogICJwYXJzZXIiOiAiQHR5\ncGVzY3JpcHQtZXNsaW50L3BhcnNlciIsCiAgInBhcnNlck9wdGlvbnMiOiB7\nCiAgICAicHJvamVjdCI6ICJ0c2NvbmZpZy5qc29uIiwKICAgICJzb3VyY2VU\neXBlIjogIm1vZHVsZSIKICB9LAogICJwbHVnaW5zIjogWyJAdHlwZXNjcmlw\ndC1lc2xpbnQiXSwKICAicnVsZXMiOiB7CiAgICAiQHR5cGVzY3JpcHQtZXNs\naW50L25hbWluZy1jb252ZW50aW9uIjogWwogICAgICAiZXJyb3IiLAogICAg\nICB7CiAgICAgICAgInNlbGVjdG9yIjogInZhcmlhYmxlIiwKICAgICAgICAi\nZm9ybWF0IjogWyJjYW1lbENhc2UiXQogICAgICB9CiAgICBdLAogICAgIkB0\neXBlc2NyaXB0LWVzbGludC9wcmVmZXItbmFtZXNwYWNlLWtleXdvcmQiOiAi\nZXJyb3IiLAogICAgIm5vLXRyYWlsaW5nLXNwYWNlcyI6ICJlcnJvciIsCiAg\nICAiY2FtZWxjYXNlIjogImVycm9yIiwKICAgICJwcmVmZXItY29uc3QiOiAi\nZXJyb3IiLAogICAgImVxZXFlcSI6IFsiZXJyb3IiLCAic21hcnQiXSwKICAg\nICJpZC1ibGFja2xpc3QiOiBbCiAgICAgICJlcnJvciIsCiAgICAgICJhbnki\nLAogICAgICAiTnVtYmVyIiwKICAgICAgIm51bWJlciIsCiAgICAgICJTdHJp\nbmciLAogICAgICAic3RyaW5nIiwKICAgICAgIkJvb2xlYW4iLAogICAgICAi\nYm9vbGVhbiIsCiAgICAgICJVbmRlZmluZWQiCiAgICBdLAogICAgImlkLW1h\ndGNoIjogImVycm9yIiwKICAgICJuby1ldmFsIjogImVycm9yIiwKICAgICJu\nby11bmRlcnNjb3JlLWRhbmdsZSI6ICJlcnJvciIsCiAgICAibm8tdW5zYWZl\nLWZpbmFsbHkiOiAiZXJyb3IiLAogICAgIm5vLXZhciI6ICJlcnJvciIsCiAg\nICAic3BhY2VkLWNvbW1lbnQiOiAiZXJyb3IiLAogICAgInByZXR0aWVyL3By\nZXR0aWVyIjogWwogICAgICAiZXJyb3IiLAogICAgICB7CiAgICAgICAgImVu\nZE9mTGluZSI6ICJhdXRvIgogICAgICB9CiAgICBdCiAgfQp9Cg==\n","encoding":"base64"}]'))
    // return this._http.get ('api/icons' );
    // return this._http.get ('https://jsonplaceholder.typicode.com/posts/1')
  }
}
