import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { CalendarModule } from 'ion2-calendar';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    CalendarPage
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    CalendarModule,
    PipesModule,
    DirectivesModule
  ],
})
export class CalendarPageModule { }
