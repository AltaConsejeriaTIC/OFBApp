import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Video } from '../../interfaces/video.interface';
import { VideoProvider } from '../../providers/video/video';
import { AudioProvider } from '../../providers/audio/audio';
import { Audio } from '../../interfaces/audio.interface';

@IonicPage()
@Component({
  selector: 'page-multimedia',
  templateUrl: 'multimedia.html',
})
export class MultimediaPage {
  public tabs = { t1: true, t2: false };
  public videos: Video[];
  public audios: Audio[];

  constructor(private videoService: VideoProvider, private audioService: AudioProvider) { }

  public ionViewDidLoad() {
    this.getAudios();
    this.getVideos();
  }

  public changeTab(id: number) {
    this.disableAlltabs();
    this.tabs[id] = true;
  }

  private disableAlltabs() {
    Object.keys(this.tabs).forEach((i) => { this.tabs[i] = false; });
  }

  private getAudios() {
    this.audioService.getAudios().subscribe((response: any) => {
      this.audios = response.slice(0, 5);
    });
  }

  private getVideos() {
    this.videoService.getVideos().subscribe((response: any) => {
      this.videos = response;
    });
  }
}
