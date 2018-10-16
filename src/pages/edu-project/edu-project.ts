import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EduProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edu-project',
  templateUrl: 'edu-project.html',
})
export class EduProjectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openExternalLink(index) {
    switch(index) { 
       case 1: { 
          //statements; 
          window.open('http://www.google.com', '_system');
          break; 
       } 
       case 2: { 
          //statements; 
          window.open('http://www.twitter.com', '_system');
          break; 
       }
       case 3: {
          window.open('http://www.spotify.com', '_system');
          break;
       } 
       default: { 
          //statements; 
          break; 
       } 
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EduProjectPage');
  }

}
