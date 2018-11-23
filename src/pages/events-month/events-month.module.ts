import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsMonthPage } from './events-month';
import { CalendarModule} from 'ion2-calendar';

@NgModule({
  declarations: [
    EventsMonthPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsMonthPage),
    CalendarModule
  ],
})
export class EventsMonthPageModule {}
