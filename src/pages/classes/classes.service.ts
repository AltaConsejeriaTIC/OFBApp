import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as ServerConstants from '../../app/utilities/server-constants';

@Injectable()

export class ClassesService {
  
  constructor(private http: HttpClient) { }
  // Backend endpoints constants
  private pageIndex = 1;

  getMagistralClassesPages() {
    this.pageIndex += 1;
    console.log(this.pageIndex)
    return this.http.get(ServerConstants.BACKEND_MAIN_DOMAIN + ServerConstants.END_POINTS.MAGISTRAL_CLASSES + `?page=${this.pageIndex}`);
  };

}

