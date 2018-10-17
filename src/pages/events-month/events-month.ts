import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

/**
 * Generated class for the EventsMonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-month',
  templateUrl: 'events-month.html',
})
export class EventsMonthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsMonthPage');
  }

  close() {
    this.navCtrl.pop();
  }

}
