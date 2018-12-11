import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edu-project',
  templateUrl: 'edu-project.html',
})
export class EduProjectPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public openExternalLink(index) {
    switch (index) {
      case 1:
        window.open('http://apreciacionmusicalofb.gov.co/aula/page/2/', '_system');
        break;
      case 2:
        window.open('http://proyectoeducativo.ofb.gov.co/proyecto-educativo-orquesta-filarmonica-de-bogota/', '_system');
        break;
      case 3:
        window.open('https://sites.google.com/a/ofb.gov.co/ofb-fomento/programas-de-formacion', '_system');
        break;
    }
  }
}
