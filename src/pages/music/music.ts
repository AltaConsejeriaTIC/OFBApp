import { Component, Input } from '@angular/core';
import { ExternalConfig } from '../../config/external.config';
import { Audio } from '../../interfaces/audio.interface';

@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  public deezerLink = ExternalConfig.deezer;
  public spotifyLink = ExternalConfig.spotify;
  public itunesLink = ExternalConfig.itunes;

  @Input()
  public audios: Audio[];

  constructor() { }
}
