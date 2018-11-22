import { NgModule } from '@angular/core';
import { BackgroundDirective } from './background/background';
import { FitDirective } from './fit/fit';

@NgModule({
  declarations: [
    BackgroundDirective,
    FitDirective
  ],
  imports: [],
  exports: [
    BackgroundDirective,
    FitDirective
  ]
})
export class DirectivesModule { }
