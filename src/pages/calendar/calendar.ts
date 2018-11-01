import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarHomePage } from '../calendar-home/calendar-home';
import { EventsMonthPage } from '../events-month/events-month';
import { EventDetailsPage } from '../event-details/event-details';
import { CalendarComponentOptions, CalendarComponent} from 'ion2-calendar'

// Custom components
import { CalendarService } from './calendar.service';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  @ViewChild('calendario') calendario: CalendarComponent;

  selectedMonth: any;
  events: any;
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
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.month = monthNames[(new Date()).getMonth()];
    this.day = new Date().getDate();
    this.year = new Date().getFullYear();
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

  openEventsMonthPage(){
  
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
  }

  monthChange($event) {
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.month = monthNames[$event.newMonth.dateObj.getMonth()];
    this.year = $event.newMonth.dateObj.getFullYear();
    this.day = "";
  }

//------------------------ http requests -------------------
  getMonthlyEvents() {
    this.calendarService.getEventsByMonth(this.selectedMonth, this.year)
    .subscribe((data) => {
      const normalizedData = this.normalizeEventData(data);
      console.log(normalizedData);
      this.events = normalizedData;
    });
  }

  normalizeEventData(data){
    data.forEach((eventObject) => {
      eventObject.splitedDate = eventObject.date.split(' ');
      eventObject.stripedTitle = eventObject.title.substring(0, 70);
      if(eventObject.stripedTitle.length == 70){
        eventObject.stripedTitle = eventObject.stripedTitle + '...';
      }
    })
    return data;
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
