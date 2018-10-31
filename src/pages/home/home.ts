import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// Custom components
import { HomeService } from './home.service';
import { NewsPage } from '../news/news';
import { NewsDetailsPage } from '../news-details/news-details';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides')
  slides: Slides;
  public events = [{
    date: {
      day: '15',
      month: 'OCT',
      time: '8:30 PM'
    },
    category: 'prensa',
    title: 'Aterciopelados',
    description: 'Teatro Mayor Julio Mario Santo Domingo.',
    imgPath: '../../assets/imgs/XMLID_7_.png',
  },
  {
    date: {
      day: '09',
      month: 'OCT',
      time: '8:30 AM'
    },
    category: 'prensa',
    title: 'Concierto 2',
    description: 'Teatro Mayor Julio Mario Santo Domingo.',
    imgPath: '../../assets/imgs/violinista.png', 
  },
  {
    date: {
      day: '12',
      month: 'OCT',
      time: '1:30 PM'
    },
    category: 'prensa',
    title: 'Concierto 2',
    description: 'Teatro Colon de Bogotá',
    imgPath: '../../assets/imgs/evento.png', 
  }
  ]
  public featuredEvents = [];
  public news = [];
  public magistralClasses = [];

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


//------------------------ Menu ----------------------
//------------------------ http requests -------------------
  getRecentNews() {
    this.homeService.getRecentNews()
    .subscribe((data) => {
      this.normalizeNewsData(data);
      this.news = data;
    });
  }

  getFeaturedEvents() {
    this.homeService.getFeaturedEvents()
    .subscribe((data) => {
      this.normalizeNewsData(data);
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

  removeHTMLTagFromString(str){
    return str.replace(/<[^>]+>/g, '');
  }

//------------------------ http requests -------------------
//------------------------ Navigation ---------------------- 
  goToNews(news) {
    this.navCtrl.push(NewsPage, news);
  }

  slideChanged() {
    this.slides.update();
  }

  goToDetails(newObject) {
    this.navCtrl.push(NewsDetailsPage, newObject);
  }
//------------------------ Navigation ----------------------

}
