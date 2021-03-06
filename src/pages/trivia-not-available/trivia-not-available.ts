import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaPage } from '../trivia/trivia';
import { TriviaService } from '..//trivia/trivia.service';

@IonicPage()
@Component({
  selector: 'page-trivia-not-available',
  templateUrl: 'trivia-not-available.html',
})
export class TriviaNotAvailablePage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private triviaService: TriviaService) { }

  public getTrivia() {
    this.triviaService.getTrivia().subscribe((data) => {
      if (Object.keys(data).length > 0) {
        this.goToTrivia(data);
      }
    });
  }

  public goToTrivia(data) {
    this.navCtrl.setRoot(TriviaPage, data);
  }
}
