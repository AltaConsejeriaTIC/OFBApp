import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


// Custom components
import { ClassDetailsPage } from '../class-details/class-details';
import { ClassesService } from './classes.service';

@IonicPage()
@Component({
  selector: 'page-classes',
  templateUrl: 'classes.html',
})
export class ClassesPage {
  public classes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private classesService : ClassesService) {
    this.classes = navParams['data'];
  }

//------------------------ Navigation ----------------------

  goToClassesDetails(classObject){
    this.navCtrl.push(ClassDetailsPage, classObject);
  }

  reachBottom(infiniteScroll){
    this.getNextPage(infiniteScroll);
  }

  getNextPage(infiniteScroll) {
    this.classesService.getMagistralClassesPages()
    .subscribe((data) => {
      this.normalizeClassesData(data);
      this.classes = this.classes.concat(data);
      infiniteScroll.complete();
    });
  }

  normalizeClassesData(data){
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

//------------------------ Navigation ----------------------


}
