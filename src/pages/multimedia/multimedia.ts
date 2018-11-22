import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-multimedia',
  templateUrl: 'multimedia.html',
})
export class MultimediaPage {
  public tabs = { t1: true, t2: false };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public ionViewDidLoad() { }

  public changeTab(id: number) {
    this.disableAlltabs();
    this.tabs[id] = true;
  }

  private disableAlltabs() {
    Object.keys(this.tabs).forEach((i) => { this.tabs[i] = false; });
  }
}
