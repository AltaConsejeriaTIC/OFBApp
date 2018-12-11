import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable()

export class NewsService {
  private pageIndex = 1;

  constructor(private http: HttpClient) { }

  public getNewsPages() {
    this.pageIndex += 1;
    return this.http.get(`${AppConfig.news}?page=${this.pageIndex}`);
  }
}

