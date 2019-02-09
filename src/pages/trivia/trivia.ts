import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaNotAvailablePage } from '../trivia-not-available/trivia-not-available';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.trivia = navParams['data'];
    this.getRemainingTime();
  }

  public ionViewWillEnter() {
    this.trivia = this.navParams['data'];
    this.getRemainingTime();
  }

  public goToNotTriviaAvailable() {
    this.navCtrl.setRoot(TriviaNotAvailablePage);
  }

  public getRemainingTime() {
    const eventStartTime = new Date();
    const eventEndTime = new Date(this.trivia.endDate);
    eventEndTime.setTime(eventEndTime.getTime() + (1000 * 60 * 60 * 24) - (1000 * 60));
    const seconds = Number(eventEndTime.valueOf() - eventStartTime.valueOf()) / 1000;
    this.remainingTime.d = Math.floor(seconds / (3600 * 24));
    this.remainingTime.h = Math.floor(seconds % (3600 * 24) / 3600);
    this.remainingTime.m = Math.floor(seconds % 3600 / 60);
  }
}
