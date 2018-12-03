import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app.config';

@Injectable()
export class AudioProvider {
  constructor(public http: HttpClient) { }

  public getAudios() {
    return this.http.get(`${AppConfig.apiTrivia}/get-audios`);
  }
}
