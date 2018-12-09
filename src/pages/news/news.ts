import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsDetailsPage } from '../news-details/news-details';
import { NewsService } from './/news.service';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  public news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService: NewsService) {
    this.news = navParams['data'];
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad News');
  }

  public reachBottom(infiniteScroll) {
    this.getNextPage(infiniteScroll);
  }

  public getNextPage(infiniteScroll) {
    this.newsService.getNewsPages()
    .subscribe((data) => {
      this.normalizeNewsData(data);
      this.news = this.news.concat(data);
      infiniteScroll.complete();
    });
  }

  public normalizeNewsData(data) {
    data.forEach((newsObject) => {
      newsObject.title = this.removeHTMLTagFromString(newsObject.title);
      newsObject.content = this.removeHTMLTagFromString(newsObject.content);
      newsObject.stripedTitle = newsObject.title.substring(0, 70);
      newsObject.stripedContent = newsObject.content.substring(0, 140);
      if (newsObject.stripedTitle.length === 70) {
        newsObject.stripedTitle = `${newsObject.stripedTitle}...`;
      }
      if (newsObject.stripedContent.length === 140) {
        newsObject.stripedContent = `${newsObject.stripedContent}...`;
      }
    });
  }

  public removeHTMLTagFromString(str) {
    return str.replace(/<[^>]+>/g, '');
  }

  public goToDetails(newObject) {
    this.navCtrl.push(NewsDetailsPage, newObject);
  }
}
