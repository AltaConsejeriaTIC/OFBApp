import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponentOptions, CalendarComponent} from 'ion2-calendar'

@IonicPage()
@Component({
  selector: 'page-events-month',
  templateUrl: 'events-month.html',
})
export class EventsMonthPage {
  @ViewChild('calendario')
  public calendario: CalendarComponent;

  public month: string;
  public day: any;
  public year: number;
  public showcalendar = false;
  public date: string;
  public type: 'string';
  public optionsMulti: CalendarComponentOptions = {
    weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    monthPickerFormat: [
      'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
    ],
    monthFormat: 'MMM YYYY',
    weekStart: 1
  };
  private monthNames = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ionViewDidLoad() {
    this.getDate();
  }

  public getDate() {
    this.month = this.monthNames[(new Date()).getMonth()];
    this.year = new Date().getFullYear();
  }

  public toggleCalendar() {
    if (this.showcalendar) {
        this.showcalendar = false;
    } else {
      this.showcalendar = true;
    }
  }

  public close() {
    this.navCtrl.pop();
  }

  public onSelect($event) { }

  public nextMonthChange($event) {
    this.calendario.next();
  }

  public prevMonthChange($event) {
    this.calendario.prev();
  }

  public monthChange($event) {
    this.month = this.monthNames[$event.newMonth.dateObj.getMonth()];
    this.year = $event.newMonth.dateObj.getFullYear();
  }
}
