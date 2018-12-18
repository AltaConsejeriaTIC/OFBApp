import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BackButtonComponent } from './back-button/back-button';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    IonicModule,
    DirectivesModule
  ],
  exports: [
    BackButtonComponent
  ]
})
export class ComponentsModule {}
