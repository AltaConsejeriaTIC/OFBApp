import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { CalendarComponentOptions} from 'ion2-calendar'

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
  month: string;
  day: number;
  year: number;
  showcalendar: boolean = false;
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
    console.log('ionViewDidLoad EventsMonthPage');
    this.getDate();
  }

  getDate(){
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.month = monthNames[(new Date()).getMonth()];
    this.day = new Date().getDate();
    this.year = new Date().getFullYear();
  }

  toggleCalendar(){
    if(this.showcalendar){
        this.showcalendar= false;
    }
    else{
        this.showcalendar= true;
    }
  }

  close() {
    this.navCtrl.pop();
  }

  onChange(){
    return;
  }

}
