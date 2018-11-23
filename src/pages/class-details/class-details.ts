import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-class-details',
  templateUrl: 'class-details.html',
})
export class ClassDetailsPage {

  public classObject: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams['data'])
    this.classObject = navParams['data']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassDetailsPage');
  }

}
