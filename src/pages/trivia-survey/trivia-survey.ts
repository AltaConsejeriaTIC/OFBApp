import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabBarProvider } from '../../providers/tab-bar/tab-bar';

@IonicPage()
@Component({
  selector: 'page-trivia-survey',
  templateUrl: 'trivia-survey.html',
})
export class TriviaSurveyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private tabBarService: TabBarProvider) { }

  public ionViewDidLoad() {
    this.tabBarService.show();
  }

  public ionViewDidLeave() {
    this.tabBarService.hide();
  }
}
