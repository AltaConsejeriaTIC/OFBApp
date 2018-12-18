import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomeService } from './home.service';
import { NewsPage } from '../news/news';
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
    this.homeService.getFeaturedEvents().subscribe((data) => {
      this.featuredEvents = data;
    });
  }

  public getRecentNews() {
    this.homeService.getRecentNews().subscribe((data) => {
      this.news = data;
    });
  }

  public getMagistralClasses() {
    this.homeService.getMagistralClasses().subscribe((data) => {
      this.magistralClasses = data;
    });
  }

  public goToNews(news) {
    this.navCtrl.push(NewsPage, news);
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
