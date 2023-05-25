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
  @Input ()
  public set svgString (v: string) {
    // debugger;
    this.svgHtml = this._sanitizer.bypassSecurityTrustHtml (v);
  }

  constructor (private readonly _sanitizer: DomSanitizer) {
    if (true) {
      console.log('here');
      
    }
  }
}
