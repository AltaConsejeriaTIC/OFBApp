import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
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

  constructor(private videoService: VideoProvider, private audioService: AudioProvider, private loadingCtrl: LoadingController) { }

  public ionViewDidLoad() {
    this.init();
  }

  private async init() {
    const loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Cargando...'
    });

    loading.present();

    await this.getAudios();
    await this.getVideos();

    loading.dismiss();
  }

  public changeTab(id: number) {
    this.disableAlltabs();
    this.tabs[id] = true;
  }

  private disableAlltabs() {
    Object.keys(this.tabs).forEach((i) => { this.tabs[i] = false; });
  }

  private getAudios() {
    this.audioService.getAudios().subscribe(
      (response: any) => {
        this.audios = response;
      }, (exception) => {
        console.error(exception);
      }
    );
  }

  private getVideos() {
    this.videoService.getVideos().subscribe(
      (response: any) => {
        this.videos = response;
      }, (exception) => {
        console.error(exception);
      }
    );
  }
}
