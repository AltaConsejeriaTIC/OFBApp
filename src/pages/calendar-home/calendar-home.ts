import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

@IonicPage()
@Component({
  selector: 'page-calendar-home',
  templateUrl: 'calendar-home.html',
})
export class CalendarHomePage {

  month: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarHomePage');
    this.getMonth();
  }

  getMonth(){
    this.month = new Date();
    this.month = this.month.getMonth()+1;
  }

  openCalendarPage() {
    this.navCtrl.push(CalendarPage, this.month);
  }

}
