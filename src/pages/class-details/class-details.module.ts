import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassDetailsPage } from './class-details';
import { DirectivesModule } from '../../directives/directives.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ClassDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(ClassDetailsPage),
    DirectivesModule,
    ComponentsModule
  ]
})
export class ClassDetailsPageModule { }
