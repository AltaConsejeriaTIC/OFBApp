// Angular ...
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

// Ionic ...
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CalendarModule } from 'ion2-calendar';

// Locale language ...
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

// Pages ...
import { PrimaryTabsPageModule } from '../pages/primary-tabs/primary-tabs.module';
import { HomePageModule } from '../pages/home/home.module';
import { HomeService } from '../pages/home/home.service';
import { CalendarHomePageModule } from '../pages/calendar-home/calendar-home.module';
import { CalendarPageModule } from '../pages/calendar/calendar.module';
import { CalendarService } from '../pages/calendar/calendar.service';
import { EduProjectPageModule } from '../pages/edu-project/edu-project.module';
import { TriviaPageModule } from '../pages/trivia/trivia.module';
import { TriviaService } from '../pages/trivia/trivia.service';
import { TriviaNotAvailablePageModule } from '../pages/trivia-not-available/trivia-not-available.module';
import { NewsPageModule } from '../pages/news/news.module';
import { NewsService } from '../pages/news/news.service';
import { NewsDetailsPageModule } from '../pages/news-details/news-details.module';
import { EventsMonthPageModule } from '../pages/events-month/events-month.module';
import { EventDetailsPageModule } from '../pages/event-details/event-details.module';
import { ClassesPageModule } from '../pages/classes/classes.module';
import { ClassesService } from '../pages/classes/classes.service';
import { ClassDetailsPageModule } from '../pages/class-details/class-details.module';

// Services ...
import { AudioProvider } from '../providers/audio/audio';
import { VideoProvider } from '../providers/video/video';

// Interceptors ...
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptor } from '../interceptors/response.interceptor';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      tabsHideOnSubPages: false,
      backButtonText: '',
      backButtonIcon: 'icon-flecha-atras'
    }),
    PrimaryTabsPageModule,
    HomePageModule,
    CalendarHomePageModule,
    CalendarPageModule,
    EduProjectPageModule,
    TriviaPageModule,
    TriviaNotAvailablePageModule,
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: 'es-CO' },
    HomeService,
    CalendarService,
    ClassesService,
    NewsService,
    SocialSharing,
    AudioProvider,
    VideoProvider,
    TriviaService,
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ]
})
export class AppModule { }
