import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace/replace';
import { UcfirstPipe } from './ucfirst/ucfirst';
import { StripHtmlPipe } from './strip-html/strip-html';
import { HtmlPipe } from './html/html';

@NgModule({
  declarations: [
    ReplacePipe,
    UcfirstPipe,
    StripHtmlPipe,
    HtmlPipe
  ],
  imports: [],
  exports: [
    ReplacePipe,
    UcfirstPipe,
    StripHtmlPipe,
    HtmlPipe
  ]
})
export class PipesModule { }
