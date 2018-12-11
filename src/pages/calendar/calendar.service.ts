import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable()

export class CalendarService {
  constructor(private http: HttpClient) { }

  public getEventsByMonth(month, year) {
    return this.http.get(`${AppConfig.monthlyEvents}/${month}?year=${year}`);
  }
}
