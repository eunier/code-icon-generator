import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgStringRendererComponent } from './svg-string-renderer.component';

@NgModule ({
  imports: [CommonModule],
  declarations: [SvgStringRendererComponent],
  exports: [SvgStringRendererComponent],
})
export class SvgStringRendererComponentModule {}
