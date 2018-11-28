import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPage } from './music';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    MusicPage
  ],
  imports: [
    IonicPageModule.forChild(MusicPage),
    DirectivesModule
  ]
})
export class MusicPageModule { }
