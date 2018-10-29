import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarHomePage } from '../calendar-home/calendar-home';
import { EventsMonthPage } from '../events-month/events-month';
import { CalendarComponentOptions} from 'ion2-calendar'

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  month: string;
  day: string;
  year: string;
  showcalendar: boolean = true;
  date: string;
  type: 'string';
  optionsMulti: CalendarComponentOptions = {
     weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
     monthPickerFormat: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
     monthFormat: 'MMM YYYY',
     weekStart: 1
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.getDate();
  }

  getDate(){
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.month = monthNames[(new Date()).getMonth()];
    this.day = new Date().getDate();
    this.year = new Date().getFullYear();
  }

  close(){
    this.navCtrl.pop();
  }

  toggleCalendar(){
    if(this.showcalendar){
        this.showcalendar= false;
    }
    else{
        this.showcalendar= true;
    }
  }

  openEventsMonthPage(){
    this.navCtrl.push(EventsMonthPage);
  }

  onChange(){
    return;
  }

}
