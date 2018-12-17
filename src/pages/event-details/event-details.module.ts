import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsPage } from './event-details';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EventDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsPage),
    DirectivesModule,
    PipesModule,
    ComponentsModule
  ]
})
export class EventDetailsPageModule { }
