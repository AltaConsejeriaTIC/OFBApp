import { Component } from '@angular/core';
import { IonicPage, NavParams, ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html'
})
export class EventDetailsPage {
  public event: any;
  public description: string;

  constructor(public navParams: NavParams, private socialSharing: SocialSharing, private toastCtrl: ToastController) {
    this.event = navParams['data'];
    this.paragraph();
  }

  private paragraph() {
    this.description = `<p>${this.event.content.replace(/\n/g, '</p><p>')}</p>`;
  }

  public share() {
    this.socialSharing.share(null, null, null, this.event.link).catch(() => {
      this.toast('No es posible compartir el evento');
    });
  }

  private toast(message: string) {
    this.toastCtrl.create({ message, duration: 3000 }).present();
  }
}
