import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Video } from '../../interfaces/video.interface';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  @Input()
  public videos: Video[];

  constructor() { }
}
