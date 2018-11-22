import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultimediaPage } from './multimedia';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { MusicPage } from '../music/music';
import { VideoPage } from '../video/video';

@NgModule({
  declarations: [
    MultimediaPage,
    MusicPage,
    VideoPage
  ],
  imports: [
    IonicPageModule.forChild(MultimediaPage),
    ComponentsModule,
    DirectivesModule
  ]
})
export class MultimediaPageModule { }
