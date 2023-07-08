import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component ({
  selector: 'app-svg-string-renderer',
  templateUrl: './svg-string-renderer.component.html',
  styleUrls: ['./svg-string-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgStringRendererComponent {
  public svgHtml: SafeHtml | null = null;

  public constructor (private readonly _sanitizer: DomSanitizer) {}

  @Input ()
  public set svgString (v: string) {
    this.svgHtml = this._sanitizer.bypassSecurityTrustHtml (v);
  }
}
