import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsMonthPage } from './events-month';

@NgModule({
  declarations: [
    EventsMonthPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsMonthPage),
  ],
})
export class EventsMonthPageModule {}
