import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.newsObject = navParams['data']
  }

  ionViewDidLoad() {
    console.log(this.newsObject);
  }

}
