import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class CalendarService {
  public mainDomain = 'http://192.168.88.62:10010/';
  public BACKEND_ENDPOINTS = {
  	MONTHLY_EVENTS: 'eventos/mes',
  };
  
  constructor(private http: HttpClient) { }
  // Backend endpoints constants

  getEventsByMonth(month, year) {
    return this.http.get(`${this.mainDomain}${this.BACKEND_ENDPOINTS.MONTHLY_EVENTS}/${month}?year=${year}`);
  };

}

