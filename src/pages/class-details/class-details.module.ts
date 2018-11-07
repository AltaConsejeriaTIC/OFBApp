import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassDetailsPage } from './class-details';

@NgModule({
  declarations: [
    ClassDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassDetailsPage),
  ],
})
export class ClassDetailsPageModule {}
