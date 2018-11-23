import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarHomePage } from './calendar-home';

@NgModule({
  declarations: [
    CalendarHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarHomePage),
  ],
})
export class CalendarHomePageModule {}
