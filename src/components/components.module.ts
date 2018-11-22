import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BackButtonComponent } from './back-button/back-button';
import { NavbarComponent } from './navbar/navbar';

@NgModule({
  declarations: [
    BackButtonComponent,
    NavbarComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    BackButtonComponent,
    NavbarComponent
  ]
})
export class ComponentsModule {}
