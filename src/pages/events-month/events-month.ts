import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponentOptions, CalendarComponent} from 'ion2-calendar'

@IonicPage()
@Component({
  selector: 'page-events-month',
  templateUrl: 'events-month.html',
})
export class EventsMonthPage {
  @ViewChild('calendario') calendario: CalendarComponent;

  month: string;
  day: any;
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
    this.getDate();
  }




  getDate(){
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.month = monthNames[(new Date()).getMonth()];
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

  onSelect($event) {
    console.log($event.title);
  }

  nextMonthChange($event){
        this.calendario.next();
         console.log('monthChange',$event);

  }

  prevMonthChange($event){
        this.calendario.prev();
         console.log('monthChange',$event);
  }

  monthChange($event) {
    const monthNames = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    this.month = monthNames[$event.newMonth.dateObj.getMonth()];
    this.year = $event.newMonth.dateObj.getFullYear();
  }

}
