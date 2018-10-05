import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// Custom components
import { NewsPage } from '../news/news'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slides')
  slides: Slides;
  events = [{
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
//------------------------ Navigation ----------------------

  slideChanged() {
    console.log('slide Changed');
    this.slides.update();
  }
}
