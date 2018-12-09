import { Component } from '@angular/core';
import { IonicPage, NavParams, ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-class-details',
  templateUrl: 'class-details.html',
})
export class ClassDetailsPage {
  public classObject: any;
  public description: string;

  constructor(public navParams: NavParams, private toastCtrl: ToastController, private socialSharing: SocialSharing) {
    this.classObject = navParams['data'];
    this.paragraph();
  }

  private paragraph() {
    this.description = `<p>${this.classObject.content.replace(/\n/g, '</p><p>')}</p>`;
  }

  public share() {
    this.socialSharing.share(null, null, null, this.classObject.link).catch(() => {
      this.toast('No es posible compartir la clase magistral');
    });
  }

  private toast(message: string) {
    this.toastCtrl.create({ message, duration: 3000 }).present();
  }
}
