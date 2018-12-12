import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  public transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
