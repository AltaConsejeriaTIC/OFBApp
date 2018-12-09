import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-class-details',
  templateUrl: 'class-details.html',
})
export class ClassDetailsPage {
  public classObject: any;
  public description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.classObject = navParams['data'];
    this.paragraph();
  }

  private paragraph() {
    this.description = `<p>${this.classObject.content.replace(/\n/g, '</p><p>')}</p>`;
  }
}
