import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  public event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
    this.event = navParams['data'];
    console.log(this.event)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

  share() {
    this.socialSharing.share("message", "Title?", null, this.event.link).then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
        console.log("alal")
  }

}
