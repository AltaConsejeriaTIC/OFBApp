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

  events: any;
  calendarIndex: any;
  selectedDayEvents: any;
  selectedMonth: any;
  month: string;
  day: any;
  year: number;
  showcalendar: boolean = true;
  date: string;
  type: 'string';
  optionsMulti: CalendarComponentOptions = {
     weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
     monthPickerFormat: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
     monthFormat: 'MMM YYYY',
     weekStart: 1
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendarService: CalendarService) {
    this.selectedMonth = navParams['data']
  }

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
    if(this.showcalendar){
      this.showcalendar= false;
    }
    else{
      this.showcalendar= true;
    }
  };

  showAllEvents(){
    this.selectedDayEvents = this.events;
    this.toggleCalendar();
  };

  nextMonthChange($event){
    this.calendario.next();
    console.log('monthChange',$event);
  };

  prevMonthChange($event){
    this.calendario.prev();
    console.log('monthChange',$event);
  };

  onChange($event){
    $event = $event.split("-");
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.month = monthNames[$event[1]-1];
    this.day = $event[2];
    this.year = $event[0];
    this.selectedDayEvents = this.getEventsForDay();
  }

  monthChange($event) {
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.month = monthNames[$event.newMonth.dateObj.getMonth()];
    this.year = $event.newMonth.dateObj.getFullYear();
    this.day = "";
  }

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
  }

//------------------------ http requests -------------------
  getMonthlyEvents() {
    this.calendarService.getEventsByMonth(this.selectedMonth, this.year)
    .subscribe((data) => {
      const normalizedData = this.normalizeEventData(data);
      console.log(normalizedData);
      this.events = normalizedData[0];
      this.calendarIndex = normalizedData[1];
      this.selectedDayEvents = this.getEventsForDay();
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
