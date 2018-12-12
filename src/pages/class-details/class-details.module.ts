import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassDetailsPage } from './class-details';
import { DirectivesModule } from '../../directives/directives.module';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ClassDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(ClassDetailsPage),
    DirectivesModule,
    ComponentsModule,
    PipesModule
  ]
})
export class ClassDetailsPageModule { }
