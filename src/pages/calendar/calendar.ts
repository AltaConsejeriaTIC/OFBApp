import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Content, LoadingController } from 'ionic-angular';
import { CalendarComponentOptions, CalendarComponent, DayConfig, CalendarComponentMonthChange } from 'ion2-calendar';
import { CalendarService } from '../../providers/calendar/calendar.service';
import { Event } from '../../interfaces/event.interface';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  public showcalendar = true;
  public selectedDate = new Date();
  private events: Event[];
  public options: CalendarComponentOptions;
  public dayEvents: Event[];
  private from: Date;
  private to: Date;
  public all = false;

  @ViewChild('calendario')
  public calendario: CalendarComponent;

  @ViewChild(Content)
  public content: Content;

  get firstDay(): number {
    return new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1).getDate();
  }

  get lastDay(): number {
    return new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + 1, 0).getDate();
  }

  get day(): number {
    return this.selectedDate.getDate();
  }

  get month(): number {
    return this.selectedDate.getMonth();
  }

  get year(): number {
    return this.selectedDate.getFullYear();
  }

  constructor(public navParams: NavParams, private calendarService: CalendarService, private loadingCtrl: LoadingController) { }

  public ionViewDidLoad() {
    this.init();
    this.getEvents();
  }

  private init() {
    const now = new Date();

    this.from = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    this.to = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

    const month = this.navParams['data'] - 1;
    const day = now.getMonth() === month ? now.getDate() : 1;

    this.selectedDate = new Date(now.getFullYear(), month, day);
  }

  private getEvents(): void {
    const loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Cargando...'
    });

    loading.present();

    this.calendarService.getEventsByMonth(this.selectedDate.getMonth() + 1, this.selectedDate.getFullYear()).subscribe(
      (response: Event[]) => {
        this.events = response.map((event: Event) => {
          event.date = new Date(event.date as string);
          event.entry = event.entry.trim().toLowerCase();
          event.isFree = !(event.entry === 'tuboleta' || event.entry === 'primerafila');
          return event;
        });
        this.setOptions();
        this.filterEvents();
        loading.dismiss();
      },
      () => {
        loading.dismiss();
      }
    );
  }

  private setOptions() {
    const daysConfig: DayConfig[] = [];

    for (let day = this.firstDay; day <= this.lastDay; day++) {
      const currentDate = new Date(this.year, this.month, day);
      const available = this.events.find((i) => (i.date as Date).getTime() === currentDate.getTime());
      const selected = currentDate.getTime() === this.selectedDate.getTime() ? 'on-selected' : null;

      if (available) {
        daysConfig.push({ date: currentDate, cssClass: `is-available ${selected}` });
      } else {
        daysConfig.push({ date: currentDate, cssClass: selected });
      }
    }

    this.options = {
      showToggleButtons: false,
      showMonthPicker: false,
      showAdjacentMonthDay: false,
      weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      from: this.from,
      to: this.to,
      daysConfig
    };
  }

  private filterEvents() {
    this.dayEvents =  this.events.filter((i) => (i.date as Date).getTime() === this.selectedDate.getTime());
  }

  public toggleCalendar() {
    this.showcalendar = !this.showcalendar;
    this.content.scrollToTop();
  }

  public allEvents() {
    this.dayEvents = this.events;
    this.showcalendar = false;
    this.all = true;
  }

  public nextMonthChange() {
    if (this.calendario.canNext()) {
      this.calendario.next();
    }
  }

  public prevMonthChange() {
    if (this.calendario.canBack()) {
      this.calendario.prev();
    }
  }

  public onChange() {
    this.filterEvents();
    this.all = false;
  }

  public monthChange(event: CalendarComponentMonthChange) {
    this.selectedDate = event.newMonth.dateObj;
    this.getEvents();
  }
}
