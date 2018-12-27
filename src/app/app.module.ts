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
import { Firebase } from '@ionic-native/firebase';
import { IonicStorageModule } from '@ionic/storage';

// Locale language ...
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

// Pages ...
import { PrimaryTabsPageModule } from '../pages/primary-tabs/primary-tabs.module';
import { HomePageModule } from '../pages/home/home.module';
import { CalendarHomePageModule } from '../pages/calendar-home/calendar-home.module';
import { CalendarPageModule } from '../pages/calendar/calendar.module';
import { EduProjectPageModule } from '../pages/edu-project/edu-project.module';
import { TriviaPageModule } from '../pages/trivia/trivia.module';
import { TriviaNotAvailablePageModule } from '../pages/trivia-not-available/trivia-not-available.module';
import { TriviaWinnersPageModule } from '../pages/trivia-winners/trivia-winners.module';
import { NewsPageModule } from '../pages/news/news.module';
import { NewsDetailsPageModule } from '../pages/news-details/news-details.module';
import { EventDetailsPageModule } from '../pages/event-details/event-details.module';
import { ClassesPageModule } from '../pages/classes/classes.module';
import { ClassDetailsPageModule } from '../pages/class-details/class-details.module';

// Services ...
import { AudioProvider } from '../providers/audio/audio';
import { VideoProvider } from '../providers/video/video';
import { CalendarService } from '../providers/calendar/calendar.service';
import { ClassesService } from '../pages/classes/classes.service';
import { NewsService } from '../pages/news/news.service';
import { TriviaSurveyService } from '../pages/trivia-survey/trivia-survey.service';
import { TriviaService } from '../pages/trivia/trivia.service';
import { HomeService } from '../pages/home/home.service';

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
      tabsHideOnSubPages: true,
      backButtonText: '',
      backButtonIcon: 'icon-flecha-atras',
      monthNames: [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
      ],
      monthShortNames: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
      dayNames: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
      dayShortNames: [ 'dom', 'lun', 'mar', 'mie', 'jue', 'vie' ],
    }),
    PrimaryTabsPageModule,
    HomePageModule,
    CalendarHomePageModule,
    CalendarPageModule,
    EduProjectPageModule,
    TriviaPageModule,
    TriviaNotAvailablePageModule,
    TriviaWinnersPageModule,
    NewsPageModule,
    NewsDetailsPageModule,
    CalendarModule,
    EventDetailsPageModule,
    ClassesPageModule,
    ClassDetailsPageModule,
    IonicStorageModule.forRoot()
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
    TriviaSurveyService,
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    Firebase,
  ]
})
export class AppModule { }
