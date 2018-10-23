import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class HomeService {
  constructor(private http: HttpClient) { }
  mainDomain = 'http://127.0.0.1:10010';
  newsPath = '/blog';

  getRecentNews() {
    return this.http.get(this.mainDomain + this.newsPath);
  }
}

