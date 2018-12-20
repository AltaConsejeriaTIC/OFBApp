import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from "@ionic-native/firebase";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../config/app.config";

const TOKEN_KEY = "ofb-token";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any = 'PrimaryTabsPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, firebase: Firebase,public http: HttpClient) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(false);
      statusBar.styleLightContent();
      statusBar.backgroundColorByHexString('#161824');
      splashScreen.hide();

      let token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        firebase.getToken().then(token => {
          if (platform.is('ios')) {
            firebase.grantPermission().then(_ =>{
              console.log("Permission granted")
            });
          }
          this.http.get(`${AppConfig.apiTrivia}/token/${token}`).subscribe(value => {
            localStorage.setItem(TOKEN_KEY, token);
            console.log(value);
          });
        }).catch(err => console.log(err));
      }
      firebase.onNotificationOpen().subscribe(data=>{
        console.log(data);
      }, err=> console.log(err));
    });
  }
}
