import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable()

export class TriviaSurveyService {
  constructor(private http: HttpClient) { }

  public uploadAnswer(answer) {
    return this.http.post(
      AppConfig.uploadAnswer,
      answer,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
  }
}

