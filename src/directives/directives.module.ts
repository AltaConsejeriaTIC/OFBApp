import { NgModule } from '@angular/core';
import { BackgroundDirective } from './background/background';
import { FitDirective } from './fit/fit';
import { LinesDirective } from './lines/lines';
import { GradientDirective } from './gradient/gradient';
import { PadIosDirective } from './pad-ios/pad-ios';
import { HiddenDirective } from './hidden/hidden';

@NgModule({
  declarations: [
    BackgroundDirective,
    FitDirective,
    LinesDirective,
    GradientDirective,
    PadIosDirective,
    HiddenDirective
  ],
  imports: [],
  exports: [
    BackgroundDirective,
    FitDirective,
    LinesDirective,
    GradientDirective,
    PadIosDirective,
    HiddenDirective
  ]
})
export class DirectivesModule { }
