import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';
import { CalendarComponentOptions, CalendarComponent } from 'ion2-calendar';
import { CalendarService } from './calendar.service';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  public monthsNames = {
    '01': 'ENERO',
    '02': 'FEBRERO',
    '03': 'MARZO',
    '04': 'ABRIL',
    '05': 'MAYO',
    '06': 'JUNIO',
    '07': 'JULIO',
    '08': 'AGOSTO',
    '09': 'SEPTIEMBRE',
    '10': 'OCTUBRE',
    '11': 'NOVIEMBRE',
    '12': 'DICIEMBRE',
  };

  public events: any;
  public calendarIndex: any;
  public selectedDayEvents: any;
  public selectedMonth: any;
  public noEvents: any;
  public month: string;
  public day: any;
  public year: number;
  public showcalendar = true;
  public date: string;
  public type: 'string';

  public optionsMulti: CalendarComponentOptions = {
    weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    monthPickerFormat: [
      'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
    ],
    monthFormat: 'MMM YYYY',
    weekStart: 1,
    from: new Date('2018-11-01')
  };

  @ViewChild('calendario')
  public calendario: CalendarComponent;

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendarService: CalendarService) {
    this.selectedMonth = navParams['data'];
  }

  public ionViewDidLoad() {
    this.getDate();
    this.getMonthlyEvents();
  }

  public getDate() {
    const currentDate = new Date();
    const monthNames = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    this.year = currentDate.getFullYear();
    this.month = monthNames[(currentDate).getMonth()];
    this.day = currentDate.getDate();
    if (this.day.length < 2) {
      this.day = `0${this.day}`;
    }
  }

  public close() {
    this.navCtrl.pop();
  }

  public toggleCalendar() {
    this.showcalendar = !this.showcalendar;
  }

  public showAllEvents(toggling) {
    this.selectedDayEvents = this.events;
    this.noEvents = false;
    if ( toggling ) {
      this.toggleCalendar();
    }
  }

  public nextMonthChange($event) {
    this.calendario.next();
  }

  public prevMonthChange($event) {
    this.calendario.prev();
  }

  public onChange($event) {
    const splitedDate = $event.split('-');
    this.month = this.monthsNames[splitedDate[1]];
    this.day = splitedDate[2];
    this.year = splitedDate[0];
    this.selectedDayEvents = this.getEventsForDay();
  }

  public monthChange($event) {
    const splitedDate = $event.newMonth.string.split('-');
    this.month = this.monthsNames[splitedDate[1]];
    this.selectedMonth = $event.newMonth.months;
    this.year = $event.newMonth.years;
    this.day = $event.newMonth.date;
    this.refreshMonthlyEvents();
  }

  public getEventsForDay() {
    if (!this.calendarIndex[this.day]) {
      this.noEvents = true;
      return [];
    }
    const events = [];
    this.calendarIndex[this.day].forEach((eventIndex) => {
      events.push(this.events[eventIndex]);
    });
    this.noEvents = false;
    return events;
  }

  public getMonthlyEvents() {
    this.calendarService.getEventsByMonth(this.selectedMonth, this.year)
    .subscribe((data) => {
      const normalizedData = this.normalizeEventData(data);
      this.events = normalizedData[0];
      this.calendarIndex = normalizedData[1];
      this.selectedDayEvents = this.getEventsForDay();
    });
  }

  public refreshMonthlyEvents() {
    this.calendarService.getEventsByMonth(this.selectedMonth, this.year)
    .subscribe((data) => {
      const normalizedData = this.normalizeEventData(data);
      this.events = normalizedData[0];
      this.calendarIndex = normalizedData[1];
      this.showAllEvents(false);
    });
  }

  public normalizeEventData(data) {
    const calendarIndex = {};
    data.forEach((eventObject, i) => {
      eventObject.isFree = true;
      eventObject.splitedDate = eventObject.date.split(' ');
      eventObject.stripedTitle = eventObject.title.substring(0, 70);
      if (eventObject.stripedTitle.length === 70) {
        eventObject.stripedTitle = `${eventObject.stripedTitle}...`;
      }
      if (eventObject.entry === 'Tuboleta' || eventObject.entry === 'primerafila') {
        eventObject.isFree = false;
      }
      calendarIndex[eventObject.splitedDate[0]] ?
      calendarIndex[eventObject.splitedDate[0]].push(i) : calendarIndex[eventObject.splitedDate[0]] = [i];
    });
    return [data, calendarIndex];
  }

  public removeHTMLTagFromString(str) {
    return str.replace(/<[^>]+>/g, '');
  }

  public goToEventDetails(event) {
    this.navCtrl.push(EventDetailsPage, event);
  }
}
