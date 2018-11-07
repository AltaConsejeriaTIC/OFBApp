import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


// Custom components
import { ClassDetailsPage } from '../class-details/class-details';
@IonicPage()
@Component({
  selector: 'page-classes',
  templateUrl: 'classes.html',
})
export class ClassesPage {
  public classes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.classes = navParams['data'];
    console.log(navParams['data'])
    console.log(this.classes)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassesPage');
  }

//------------------------ Navigation ---------------------- 

  goToClassesDetails(){
    this.navCtrl.push(ClassDetailsPage);
  }

  reachBottom(event){
    console.log(event);
    console.log("lala");
  }

//------------------------ Navigation ----------------------


}
