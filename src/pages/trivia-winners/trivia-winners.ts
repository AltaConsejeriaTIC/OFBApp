import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TriviaWinnersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trivia-winners',
  templateUrl: 'trivia-winners.html',
})
export class TriviaWinnersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad TriviaWinnersPage');
  }

}
