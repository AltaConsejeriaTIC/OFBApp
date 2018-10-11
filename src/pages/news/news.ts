import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news = [{
    title: 'Convocatoria #2 Orquesta folarmónica Juvenil',
    category: 'Prensa',
    date: '04 Sep 2018',
    content: 'músicos entre los 18 y 26 años que deseen hacer parte de la Orquesta...'
  },
  {
    title: 'Convocatoria #4 Orquesta folarmónica Juvenil',
    category: 'Convocatoria',
    date: '04 Sep 2018',
    content: 'La orquesta Filarmónica de Bogotá convoca a jóvenes músicos entre los 18 y 26 años que deseen hacer parte de la Orquesta...'
  },
  {
    title: 'Convocatoria #34 Orquesta folarmónica Juvenil',
    category: 'Evento',
    date: '04 Sep 2018',
    content: 'La orquesta Filarmónica de Bogotá convoca a jóvenes'
  }]
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad News');
  }

}
