import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExternalConfig } from '../../config/external.config';

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  public deezerLink = ExternalConfig.deezer;
  public spotifyLink = ExternalConfig.spotify;
  public itunesLink = ExternalConfig.itunes;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }
}
