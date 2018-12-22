import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app.config';

const TOKEN_KEY = 'ofb-token';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any = 'PrimaryTabsPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, firebase: Firebase, public http: HttpClient) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(false);
      statusBar.styleLightContent();
      statusBar.backgroundColorByHexString('#161824');
      splashScreen.hide();

      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        firebase.getToken().then(t => {
          if (platform.is('ios')) {
            firebase.grantPermission();
          }
          this.http.get(`${AppConfig.apiTrivia}/token/${t}`).subscribe(() => {
            localStorage.setItem(TOKEN_KEY, t);
          });
        }).catch(err => console.error(err));
      }
      firebase.onNotificationOpen().subscribe(data => { }, err => console.error(err));
    });
  }
}
