import { NgModule, LOCALE_ID } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { CalendarModule} from 'ion2-calendar';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    CalendarModule
  ],
})
export class CalendarPageModule {
}
