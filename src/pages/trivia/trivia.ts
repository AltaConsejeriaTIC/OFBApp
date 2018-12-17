import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaNotAvailablePage } from '../trivia-not-available/trivia-not-available';
import { TriviaService } from './trivia.service';

@IonicPage()
@Component({
  selector: 'page-trivia',
  templateUrl: 'trivia.html',
})
export class TriviaPage {
  public isTriviaAvailable = true;
  public trivia = {};
  public remainingTime = {
    d: '-',
    h: '-',
    m: '-',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private triviaService: TriviaService) { }

  public ionViewDidLoad() {
    if (!this.isTriviaAvailable) {
      this.navCtrl.push(TriviaNotAvailablePage);
    }
    this.getTrivia();
  }
  
  public getTrivia() {
    console.log("helo?")
    this.triviaService.getTrivia().subscribe((data) => {
      this.trivia = data;
      console.log(data)
      this.getRemainingTime();
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
