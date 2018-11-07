import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Custom components
import { NewsDetailsPage } from '../news-details/news-details';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = navParams['data'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad News');
  }

//-------------------------- Navigation ---------------------------------
  goToDetails(newObject) {
    this.navCtrl.push(NewsDetailsPage, newObject);
  }

//-------------------------- Navigation ---------------------------------




}
