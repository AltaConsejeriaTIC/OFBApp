import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable()

export class TriviaService {
  constructor(private http: HttpClient) { }

  public getTrivia() {
    return this.http.get(AppConfig.trivia);
  }
}

