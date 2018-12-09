import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomeService } from './home.service';
import { NewsPage } from '../news/news';
import { NewsDetailsPage } from '../news-details/news-details';
import { EventDetailsPage } from '../event-details/event-details';
import { ClassesPage } from '../classes/classes';
import { ClassDetailsPage } from '../class-details/class-details';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public showMenu = true;
  public featuredEvents: any;
  public news: any;
  public magistralClasses: any;

  @ViewChild('slides')
  public slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeService: HomeService) { }

  public ionViewDidLoad() {
    this.initView();
  }

  public initView() {
    this.getRecentNews();
    this.getFeaturedEvents();
    this.getMagistralClasses();
  }

  public toogleMenu() {
    this.showMenu = !this.showMenu;
  }

  public getFeaturedEvents() {
    this.homeService.getFeaturedEvents()
    .subscribe((data) => {
      this.normalizeEventsData(data);
      this.featuredEvents = data;
    });
  }

  public getRecentNews() {
    this.homeService.getRecentNews()
    .subscribe((data) => {
      this.normalizeNewsData(data);
      this.news = data;
    });
  }

  public getMagistralClasses() {
    this.homeService.getMagistralClasses()
    .subscribe((data) => {
      this.normalizeNewsData(data);
      this.magistralClasses = data;
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

  public normalizeEventsData(data) {
    data.forEach((newsObject) => {
      newsObject.splitedDate = newsObject.date.split(' ');
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

  public goToNews(news) {
    this.navCtrl.push(NewsPage, news);
  }

  public goToNewDetails(newObject) {
    this.navCtrl.push(NewsDetailsPage, newObject);
  }

  public goToEventDetails(event) {
    this.navCtrl.push(EventDetailsPage, event);
  }

  public goToAllClasses(classes) {
    this.navCtrl.push(ClassesPage, classes);
  }

  public goToClassesDetails(classObject) {
    this.navCtrl.push(ClassDetailsPage, classObject);
  }

  public slideChanged() {
    this.slides.update();
  }
}
