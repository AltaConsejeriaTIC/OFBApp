import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace/replace';
import { UcfirstPipe } from './ucfirst/ucfirst';
import { StripHtmlPipe } from './strip-html/strip-html';
import { HtmlPipe } from './html/html';
import { EmptyPipe } from './empty/empty';

@NgModule({
  declarations: [
    ReplacePipe,
    UcfirstPipe,
    StripHtmlPipe,
    HtmlPipe,
    EmptyPipe
  ],
  imports: [],
  exports: [
    ReplacePipe,
    UcfirstPipe,
    StripHtmlPipe,
    HtmlPipe,
    EmptyPipe
  ]
})
export class PipesModule { }
