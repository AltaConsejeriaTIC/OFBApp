import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryTabsPageModule } from '../pages/primary-tabs/primary-tabs.module'
import { HomePageModule } from '../pages/home/home.module';
import { HomeService } from '../pages/home/home.service';
import { CalendarHomePageModule } from '../pages/calendar-home/calendar-home.module';
import { CalendarPageModule } from '../pages/calendar/calendar.module';
import { CalendarService } from '../pages/calendar/calendar.service';
import { EduProjectPageModule } from '../pages/edu-project/edu-project.module';
import { AudVisContentPageModule } from '../pages/aud-vis-content/aud-vis-content.module';
import { TriviaPageModule } from '../pages/trivia/trivia.module';
import { NewsPageModule} from '../pages/news/news.module';
import { NewsDetailsPageModule } from '../pages/news-details/news-details.module';
import { EventsMonthPageModule } from '../pages/events-month/events-month.module';
import { EventDetailsPageModule } from '../pages/event-details/event-details.module';
import { ClassesPageModule } from '../pages/classes/classes.module';
import { ClassesService } from '../pages/classes/classes.service';
import { ClassDetailsPageModule } from '../pages/class-details/class-details.module';

import { CalendarModule } from "ion2-calendar";

import es from '@angular/common/locales/es';

import { registerLocaleData } from '@angular/common';
registerLocaleData(es);



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      backButtonText: '',
      backButtonIcon: 'icon-flecha-atras',
    }),
    PrimaryTabsPageModule,
    HomePageModule,
    CalendarHomePageModule,
    CalendarPageModule,
    EduProjectPageModule,
    AudVisContentPageModule,
    TriviaPageModule,
    NewsPageModule,
    NewsDetailsPageModule,
    EventsMonthPageModule,
    CalendarModule,
    EventDetailsPageModule,
    ClassesPageModule,
    ClassDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: "es" },
    HomeService,
    CalendarService,
    ClassesService
  ]
})
export class AppModule {}
