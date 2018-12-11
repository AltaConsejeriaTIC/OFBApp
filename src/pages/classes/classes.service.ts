import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable()

export class ClassesService {
  constructor(private http: HttpClient) { }
  private pageIndex = 1;

  public getMagistralClassesPages() {
    this.pageIndex += 1;
    return this.http.get(`${AppConfig.magistralClasses}?page=${this.pageIndex}`);
  }
}

