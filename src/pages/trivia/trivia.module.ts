import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TriviaPage } from './trivia';

@NgModule({
  declarations: [
    TriviaPage,
  ],
  imports: [
    IonicPageModule.forChild(TriviaPage),
  ],
})
export class TriviaPageModule {}
