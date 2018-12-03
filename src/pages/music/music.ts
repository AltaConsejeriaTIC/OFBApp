import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ExternalConfig } from '../../config/external.config';
import { AudioProvider } from '../../providers/audio/audio';
import { Audio } from '../../interfaces/audio.interface';

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  public audios: Audio[];
  public deezerLink = ExternalConfig.deezer;
  public spotifyLink = ExternalConfig.spotify;
  public itunesLink = ExternalConfig.itunes;

  constructor(private audioProvider: AudioProvider) {
    this.getAudios();
  }

  private getAudios() {
    this.audioProvider.getAudios().subscribe((response: any) => {
      this.audios = response.slice(0, 5);
    });
  }
}
