import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudVisContentPage } from './aud-vis-content';

@NgModule({
  declarations: [
    AudVisContentPage,
  ],
  imports: [
    IonicPageModule.forChild(AudVisContentPage),
  ],
})
export class AudVisContentPageModule {}
