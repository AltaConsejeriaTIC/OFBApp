import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { HomePage } from '../home/home';


/**
 * Generated class for the CalendarHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    this.navCtrl.push(CalendarPage);
  }

  close() {
    this.navCtrl.push(HomePage);
  }



}
