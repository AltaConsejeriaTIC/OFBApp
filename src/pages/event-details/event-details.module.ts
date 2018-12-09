import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsPage } from './event-details';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    EventDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsPage),
    DirectivesModule
  ]
})
export class EventDetailsPageModule { }
