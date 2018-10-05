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
    title: 'El pedazo de título',
    description: 'Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera',
    imgPath: 'http://www.granjasantaisabel.com/otras-aves/images/pato-domestico.jpg',
    
  },
  {
    date: {
      day: '15',
      month: 'OCT',
      time: '8:30 PM'
    },
    category: 'prensa',
    title: 'El pedazo de título de este evento.',
    description: 'Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera',
    imgPath: 'http://www.granjasantaisabel.com/otras-aves/images/pato-domestico.jpg',
    
  },
  {
    date: {
      day: '15',
      month: 'OCT',
      time: '8:30 PM'
    },
    category: 'prensa',
    title: 'El pedazo de título de este evento.',
    description: 'Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera Horrenda description tan áspera',
    imgPath: 'http://www.granjasantaisabel.com/otras-aves/images/pato-domestico.jpg',
    
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
