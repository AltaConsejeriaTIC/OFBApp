import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaNotAvailablePage } from '../trivia-not-available/trivia-not-available';
import { TriviaWinnersPage } from '../trivia-winners/trivia-winners';
import { TriviaService } from './trivia.service';

@IonicPage()
@Component({
  selector: 'page-trivia',
  templateUrl: 'trivia.html',
})
export class TriviaPage {
  public trivia: any = {};
  public remainingTime: any = {
    d: '-',
    h: '-',
    m: '-'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private triviaService: TriviaService) { }

  public ionViewWillEnter() {
    this.getTrivia();
  }

  public goToNotTriviaAvailable() {
    this.navCtrl.setRoot(TriviaNotAvailablePage);
  }

  public getTrivia() {
    this.triviaService.getTrivia().subscribe((data) => {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        this.getWinners();
      } else {
        this.trivia = data;
        this.getRemainingTime();
      }
    });
  }

  public getWinners() {
    this.triviaService.getWinners().subscribe((data: any) => {
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        this.goToNotTriviaAvailable();
      } else {
        const offsetEndTriviaDate = new Date(data.date);
        offsetEndTriviaDate.setDate(offsetEndTriviaDate.getDate() + 3);
        console.log(new Date());
        console.log(offsetEndTriviaDate);
        console.log(new Date() > offsetEndTriviaDate);

        if (new Date() > offsetEndTriviaDate) {
          this.goToNotTriviaAvailable();
        } else {
          this.navCtrl.setRoot(TriviaWinnersPage, data);
        }
      }
    });
  }

  public getRemainingTime() {
    const eventStartTime = new Date();
    const eventEndTime = new Date(this.trivia.endDate);
    const seconds = Number(eventEndTime.valueOf() - eventStartTime.valueOf()) / 1000;
    this.remainingTime.d = Math.floor(seconds / (3600 * 24));
    this.remainingTime.h = Math.floor(seconds % (3600 * 24) / 3600);
    this.remainingTime.m = Math.floor(seconds % 3600 / 60);
  }
}
