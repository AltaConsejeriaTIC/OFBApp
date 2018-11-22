import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }
}
