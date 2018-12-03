import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../config/app.config';

@Injectable()
export class VideoProvider {
  constructor(public http: HttpClient) { }

  public getVideos() {
    return this.http.get(`${AppConfig.apiTrivia}/get-videos`);
  }
}
