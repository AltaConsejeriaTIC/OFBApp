import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
  public newsObject: any;

  constructor(public navParams: NavParams) {
    this.newsObject = navParams['data'];
  }
}
