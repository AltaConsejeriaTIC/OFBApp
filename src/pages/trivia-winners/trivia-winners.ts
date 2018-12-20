import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-trivia-winners',
  templateUrl: 'trivia-winners.html',
})
export class TriviaWinnersPage {
	public winners = {};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.winners = navParams['data'];
  	console.log(this.winners);
  }
}
