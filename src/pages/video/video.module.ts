import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from './video';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    VideoPage
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
    DirectivesModule
  ]
})
export class VideoPageModule { }
