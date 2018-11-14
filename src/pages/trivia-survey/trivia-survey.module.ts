import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TriviaSurveyPage } from './trivia-survey';

@NgModule({
  declarations: [
    TriviaSurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(TriviaSurveyPage),
  ],
})
export class TriviaSurveyPageModule {}
