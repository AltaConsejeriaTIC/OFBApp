import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-trivia-survey',
  templateUrl: 'trivia-survey.html',
})
export class TriviaSurveyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ionViewDidLoad() {
  }

  public ionViewDidLeave() {
  }
}
