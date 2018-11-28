import { NgModule } from '@angular/core';
import { BackgroundDirective } from './background/background';
import { FitDirective } from './fit/fit';
import { LinesDirective } from './lines/lines';

@NgModule({
  declarations: [
    BackgroundDirective,
    FitDirective,
    LinesDirective
  ],
  imports: [],
  exports: [
    BackgroundDirective,
    FitDirective,
    LinesDirective
  ]
})
export class DirectivesModule { }
