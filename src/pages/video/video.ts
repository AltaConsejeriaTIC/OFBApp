import { Component, Input } from '@angular/core';
import { Video } from '../../interfaces/video.interface';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  @Input()
  public videos: Video[];

  constructor() { }
}
