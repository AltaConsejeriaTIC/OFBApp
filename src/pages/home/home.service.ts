import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ServerConstants from '../../app/utilities/server-constants';

@Injectable()

export class HomeService {
  
  constructor(private http: HttpClient) { }
  // Backend endpoints constants

  getFeaturedEvents() {
    return this.http.get(ServerConstants.BACKEND_MAIN_DOMAIN + ServerConstants.END_POINTS.RECENT_EVENTS);
  };

  getRecentNews() {
    return this.http.get(ServerConstants.BACKEND_MAIN_DOMAIN + ServerConstants.END_POINTS.RECENT_NEWS);
  };

  getMagistralClasses() {
    return this.http.get(ServerConstants.BACKEND_MAIN_DOMAIN + ServerConstants.END_POINTS.MAGISTRAL_CLASSES_HOME);
  };

}

