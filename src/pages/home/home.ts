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

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides')
  slides: Slides;
  events = [
  {
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
  news = [{
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
  }]
  classes = [{
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
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeService: HomeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getRecentNews();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }

//------------------------ Navigation ---------------------- 
  goToNews() {
    console.log("goToNews")
    this.navCtrl.push(NewsPage);
  }

  slideChanged() {
    console.log('slide Changed');
    this.slides.update();
  }
//------------------------ Navigation ----------------------
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

  normalizeNewsData(data){
    const normalizeData = []
    data.forEach((newsObject) => {
      newsObject.content = newsObject.content.substring(0, 139);
    })
    console.log(data)
  }

//------------------------ http requests -------------------

}
