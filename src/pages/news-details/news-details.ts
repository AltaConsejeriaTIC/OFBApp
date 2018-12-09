import { Component } from '@angular/core';
import { IonicPage, NavParams, ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
  public newsObject: any;
  public description: string;

  constructor(public navParams: NavParams, private toastCtrl: ToastController, private socialSharing: SocialSharing) {
    this.newsObject = navParams['data'];
    console.log('News: ', this.newsObject.link);
    this.paragraph();
  }

  private paragraph() {
    this.description = `<p>${this.newsObject.content.replace(/\n/g, '</p><p>')}</p>`;
  }

  public share() {
    this.socialSharing.share(null, null, null, this.newsObject.link).catch(() => {
      this.toast('No es posible compartir la noticia');
    });
  }

  private toast(message: string) {
    this.toastCtrl.create({ message, duration: 3000 }).present();
  }
}
