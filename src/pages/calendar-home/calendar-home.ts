import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

@IonicPage()
@Component({
  selector: 'page-calendar-home',
  templateUrl: 'calendar-home.html',
})
export class CalendarHomePage {
  public month: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ionViewDidLoad() {
    this.getMonth();
  }

  public getMonth() {
    this.month = new Date();
    this.month = this.month.getMonth() + 1;
  }

  public openCalendarPage(month) {
    this.navCtrl.push(CalendarPage, month);
  }
}
