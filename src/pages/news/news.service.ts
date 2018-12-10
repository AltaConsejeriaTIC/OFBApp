import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ServerConstants from '../../app/utilities/server-constants';

@Injectable()

export class NewsService {
  private pageIndex = 1;

  constructor(private http: HttpClient) { }

  public getNewsPages() {
    this.pageIndex += 1;
    return this.http.get(ServerConstants.BACKEND_MAIN_DOMAIN + ServerConstants.END_POINTS.NEWS + `?page=${this.pageIndex}`);
  }
}

