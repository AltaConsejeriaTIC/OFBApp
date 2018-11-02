import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class HomeService {
  public mainDomain = 'http://192.168.88.62:10010/';
  public BACKEND_ENDPOINTS = {
  	RECENT_EVENTS: 'eventos/home/',
  	RECENT_NEWS: 'blog/home/',
  	MAGISTRAL_CLASSES: 'clases-magistrales/home',
  };
  
  constructor(private http: HttpClient) { }
  // Backend endpoints constants

  getFeaturedEvents() {
    return this.http.get(this.mainDomain + this.BACKEND_ENDPOINTS.RECENT_EVENTS);
  };

  getRecentNews() {
    return this.http.get(this.mainDomain + this.BACKEND_ENDPOINTS.RECENT_NEWS);
  };

  getMagistralClasses() {
    return this.http.get(this.mainDomain + this.BACKEND_ENDPOINTS.MAGISTRAL_CLASSES);
  };

}

