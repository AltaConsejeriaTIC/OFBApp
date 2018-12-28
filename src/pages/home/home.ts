import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, LoadingController } from 'ionic-angular';
import { HomeService } from './home.service';
import { NewsPage } from '../news/news';
import { EventDetailsPage } from '../event-details/event-details';
import { ClassesPage } from '../classes/classes';
import { ClassDetailsPage } from '../class-details/class-details';
import { Event } from '../../interfaces/event.interface';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public showMenu = true;
  public featuredEvents: Event[];
  public news: any;
  public magistralClasses: any;

  @ViewChild('slides')
  public slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private homeService: HomeService,
    private loadingCtrl: LoadingController
  ) { }

  public ionViewDidLoad() {
    this.init();
  }

  private async init() {
    const loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Cargando...'
    });

    loading.present();

    await this.getRecentNews();
    await this.getFeaturedEvents();
    await this.getMagistralClasses();

    loading.dismiss();
  }

  public toogleMenu() {
    this.showMenu = !this.showMenu;
  }

  public getFeaturedEvents() {
    this.homeService.getFeaturedEvents().subscribe((data: Event[]) => {
      this.featuredEvents = data.map((event: Event) => {
        event.date = new Date(event.date as string);
        event.entry = event.entry.trim().toLowerCase();
        event.isFree = !(event.entry === 'tuboleta' || event.entry === 'primerafila');
        return event;
      });
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
