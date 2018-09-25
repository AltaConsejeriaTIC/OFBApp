import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PrimaryTabsPageModule } from '../pages/primary-tabs/primary-tabs.module'
import { HomePageModule } from '../pages/home/home.module';
import { CalendarPageModule } from '../pages/calendar/calendar.module';
import { EduProjectPageModule } from '../pages/edu-project/edu-project.module';
import { AudVisContentPageModule } from '../pages/aud-vis-content/aud-vis-content.module';
import { TriviaPageModule } from '../pages/trivia/trivia.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PrimaryTabsPageModule,
    HomePageModule,
    CalendarPageModule,
    EduProjectPageModule,
    AudVisContentPageModule,
    TriviaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
