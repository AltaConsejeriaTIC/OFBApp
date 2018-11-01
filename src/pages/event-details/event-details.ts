import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  public event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams['data'];
    console.log(this.event)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

}
