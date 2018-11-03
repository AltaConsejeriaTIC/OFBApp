import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ServerConstants from '../../app/utilities/server-constants';

@Injectable()

export class CalendarService {
  
  constructor(private http: HttpClient) { }
  // Backend endpoints constants

  getEventsByMonth(month, year) {
    return this.http.get(`${ServerConstants.BACKEND_MAIN_DOMAIN + ServerConstants.END_POINTS.MONTHLY_EVENTS}/${month}?year=${year}`);
  };

}

