import { NgModule } from '@angular/core';
import { BackgroundDirective } from './background/background';
import { FitDirective } from './fit/fit';
import { LinesDirective } from './lines/lines';
import { GradientDirective } from './gradient/gradient';

@NgModule({
  declarations: [
    BackgroundDirective,
    FitDirective,
    LinesDirective,
    GradientDirective
  ],
  imports: [],
  exports: [
    BackgroundDirective,
    FitDirective,
    LinesDirective,
    GradientDirective
  ]
})
export class DirectivesModule { }
