import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';
import { CalendarComponentOptions, CalendarComponent } from 'ion2-calendar'

// Custom components
import { CalendarService } from './calendar.service';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  @ViewChild('calendario') calendario: CalendarComponent;

  private monthsNames = {
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
  }

  private events: any;
  private calendarIndex: any;
  private selectedDayEvents: any;
  private selectedMonth: any;
  private noEvents: any;
  private month: string;
  private day: any;
  private year: number;
  private showcalendar: boolean = true;
  private date: string;
  private type: 'string';
  private optionsMulti: CalendarComponentOptions = {
     weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
     monthPickerFormat: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
     monthFormat: 'MMM YYYY',
     weekStart: 1
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendarService: CalendarService) {
    this.selectedMonth = navParams['data'];
  };

  ionViewDidLoad() {
    this.getDate();
    this.getMonthlyEvents();
  };

  getDate(){
    const currentDate = new Date();
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.year = currentDate.getFullYear();
    this.month = monthNames[(currentDate).getMonth()];
    this.day = '' + currentDate.getDate();
    if(this.day.length < 2) this.day = '0' + this.day;
  };

  close(){
    this.navCtrl.pop();
  };

  toggleCalendar(){
    this.showcalendar = !this.showcalendar;
  };

  showAllEvents(toggling){
    this.selectedDayEvents = this.events;
    this.noEvents = false;
    if ( toggling ) this.toggleCalendar();
  };

  nextMonthChange($event){
    this.calendario.next();
    // this.selectedMonth = this.selectedMonth + 1;
    // if (this.selectedMonth === 13) {
    //   this.selectedMonth = 1;
    // }
    // this.getMonthlyEvents();
  };

  prevMonthChange($event){
    this.calendario.prev();
    // this.selectedMonth = this.selectedMonth - 1;
    // if (this.selectedMonth === 0) {
    //   this.selectedMonth = 12;
    // }
    // this.getMonthlyEvents();
  };

  onChange($event){
    const splitedDate = $event.split("-");
    this.month = this.monthsNames[splitedDate[1]];
    this.day = splitedDate[2];
    this.year = splitedDate[0];
    this.selectedDayEvents = this.getEventsForDay();
  };

  monthChange($event) {
    const splitedDate = $event.newMonth.string.split("-");
    this.month = this.monthsNames[splitedDate[1]];
    this.selectedMonth = $event.newMonth.months;
    this.year = $event.newMonth.years;
    this.day = $event.newMonth.date;
    this.refreshMonthlyEvents();
  };

  getEventsForDay(){
    if(!this.calendarIndex[this.day]){
      this.noEvents = true;
      return [];
    };
    const events = [];
    this.calendarIndex[this.day].forEach((eventIndex) => {
      events.push(this.events[eventIndex]);
    });
    this.noEvents = false;
    return events;
  };

//------------------------ http requests -------------------
  getMonthlyEvents() {
    this.calendarService.getEventsByMonth(this.selectedMonth, this.year)
    .subscribe((data) => {
      const normalizedData = this.normalizeEventData(data);
      this.events = normalizedData[0];
      this.calendarIndex = normalizedData[1];
      this.selectedDayEvents = this.getEventsForDay();
    });
  }

  refreshMonthlyEvents() {
    this.calendarService.getEventsByMonth(this.selectedMonth, this.year)
    .subscribe((data) => {
      const normalizedData = this.normalizeEventData(data);
      this.events = normalizedData[0];
      this.calendarIndex = normalizedData[1];
      this.showAllEvents(false);
    });
  }

  normalizeEventData(data){
    const calendarIndex = {}
    data.forEach((eventObject, i) => {
      eventObject.isFree = true;
      eventObject.splitedDate = eventObject.date.split(' ');
      eventObject.stripedTitle = eventObject.title.substring(0, 70);
      if(eventObject.stripedTitle.length == 70){
        eventObject.stripedTitle = eventObject.stripedTitle + '...';
      }
      if(eventObject.entry == 'Tuboleta' || eventObject.entry == 'primerafila'){
        eventObject.isFree = false;
      }
      calendarIndex[eventObject.splitedDate[0]] ?
      calendarIndex[eventObject.splitedDate[0]].push(i) : calendarIndex[eventObject.splitedDate[0]] = [i];
    })
    return [data, calendarIndex];
  }

  removeHTMLTagFromString(str){
    return str.replace(/<[^>]+>/g, '');
  }

//------------------------ http requests -------------------
//------------------------ Navigation ----------------------

  goToEventDetails(event){
    this.navCtrl.push(EventDetailsPage, event);
  }
//------------------------ Navigation ----------------------
}
