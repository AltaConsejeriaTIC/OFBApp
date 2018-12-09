import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
  public newsObject: any;
  public description: string;

  constructor(public navParams: NavParams) {
    this.newsObject = navParams['data'];
    this.paragraph();
  }

  private paragraph() {
    this.description = `<p>${this.newsObject.content.replace(/\n/g, '</p><p>')}</p>`;
  }
}
