import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable()

export class HomeService {
  constructor(private http: HttpClient) { }

  public getFeaturedEvents() {
    return this.http.get(AppConfig.recentEvents);
  }

  public getRecentNews() {
    return this.http.get(AppConfig.recentNews);
  }

  public getMagistralClasses() {
    return this.http.get(AppConfig.magistralClassesHome);
  }
}

