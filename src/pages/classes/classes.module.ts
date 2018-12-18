import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassesPage } from './classes';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ClassesPage
  ],
  imports: [
    IonicPageModule.forChild(ClassesPage),
    DirectivesModule,
    PipesModule
  ]
})
export class ClassesPageModule { }
