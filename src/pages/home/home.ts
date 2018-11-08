import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

// Custom components
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

  @ViewChild('slides')
  slides: Slides;
  public showMenu = true;
  public featuredEvents : any;
  public news : any;
  public magistralClasses : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private homeService: HomeService) {
  }

  ionViewDidLoad() {

    this.initView();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }

  initView() {
    this.getRecentNews();
    this.getFeaturedEvents();
    this.getMagistralClasses();

  }
//------------------------ Menu ----------------------
  toogleMenu(){
    this.showMenu = !this.showMenu;
    console.log(this.showMenu)
  }

//------------------------ Menu ----------------------
//------------------------ http requests -------------------
  getRecentNews() {
    this.homeService.getRecentNews()
    .subscribe((data) => {
      console.log(data)
      this.normalizeNewsData(data);
      this.news = data;
    });
  }

  getFeaturedEvents() {
    this.homeService.getFeaturedEvents()
    .subscribe((data) => {
      this.normalizeEventsData(data);
      this.featuredEvents = data;
    });
  }

  getMagistralClasses() {
    this.homeService.getMagistralClasses()
    .subscribe((data) => {
      this.normalizeNewsData(data);
      this.magistralClasses = data;
    });
  }

  normalizeNewsData(data){
    data.forEach((newsObject) => {
      newsObject.title = this.removeHTMLTagFromString(newsObject.title)
      newsObject.content = this.removeHTMLTagFromString(newsObject.content)
      newsObject.stripedTitle = newsObject.title.substring(0, 70);
      newsObject.stripedContent = newsObject.content.substring(0, 140);
      if(newsObject.stripedTitle.length == 70){
        newsObject.stripedTitle = newsObject.stripedTitle + '...';
      }
      if(newsObject.stripedContent.length == 140){
        newsObject.stripedContent = newsObject.stripedContent + '...';
      }
    })
  }

  normalizeEventsData(data){
    data.forEach((newsObject) => {
      newsObject.splitedDate = newsObject.date.split(' ');
      newsObject.title = this.removeHTMLTagFromString(newsObject.title)
      newsObject.content = this.removeHTMLTagFromString(newsObject.content)
      newsObject.stripedTitle = newsObject.title.substring(0, 70);
      newsObject.stripedContent = newsObject.content.substring(0, 140);
      if(newsObject.stripedTitle.length == 70){
        newsObject.stripedTitle = newsObject.stripedTitle + '...';
      }
      if(newsObject.stripedContent.length == 140){
        newsObject.stripedContent = newsObject.stripedContent + '...';
      }
    })
  }

  removeHTMLTagFromString(str){
    return str.replace(/<[^>]+>/g, '');
  }

//------------------------ http requests -------------------
//------------------------ Navigation ----------------------
  goToToS() {
    console.log("go To Terms of Service")
    //this.navCtrl.push();
  }
  goToNews(news) {
    this.navCtrl.push(NewsPage, news);
  }

  goToNewDetails(newObject) {
    this.navCtrl.push(NewsDetailsPage, newObject);
  }

  goToEventDetails(event){
    this.navCtrl.push(EventDetailsPage, event);
  }

  goToAllClasses(classes){
    this.navCtrl.push(ClassesPage, classes);
  }

  goToClassesDetails(classObject){
    this.navCtrl.push(ClassDetailsPage, classObject);
  }

  slideChanged() {
    this.slides.update();
  }

//------------------------ Navigation ----------------------

}
