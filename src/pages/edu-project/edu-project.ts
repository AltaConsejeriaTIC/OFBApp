import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ExternalConfig } from '../../config/external.config';

@IonicPage()
@Component({
  selector: 'page-edu-project',
  templateUrl: 'edu-project.html',
})
export class EduProjectPage {
  public musicalAppreciation = ExternalConfig.musicalAppreciation;
  public educationalProject = ExternalConfig.educationalProject;
  public virtualClassroom = ExternalConfig.virtualClassroom;

  constructor() { }
}
