import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaNotAvailablePage } from '../trivia-not-available/trivia-not-available';

@IonicPage()
@Component({
  selector: 'page-trivia',
  templateUrl: 'trivia.html',
})
export class TriviaPage {
	public isTriviaAvailable = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if(!this.isTriviaAvailable) {
    	this.navCtrl.push(TriviaNotAvailablePage);
    }
  }

}
