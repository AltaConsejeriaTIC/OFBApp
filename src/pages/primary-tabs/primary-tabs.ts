import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-primary-tabs',
  templateUrl: 'primary-tabs.html'
})
export class PrimaryTabsPage {
  public homeRoot = 'HomePage';
  public calendarHomeRoot = 'CalendarHomePage';
  public eduProjectRoot = 'EduProjectPage';
  public audVisContentRoot = 'AudVisContentPage';
  public triviaRoot = 'TriviaPage';

  constructor(public navCtrl: NavController) {}
}
