import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TriviaWinnersPage } from './trivia-winners';

@NgModule({
  declarations: [
    TriviaWinnersPage,
  ],
  imports: [
    IonicPageModule.forChild(TriviaWinnersPage),
  ],
})
export class TriviaWinnersPageModule {}
