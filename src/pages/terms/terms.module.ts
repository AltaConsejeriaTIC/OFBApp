import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsPage } from './terms';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    TermsPage
  ],
  imports: [
    IonicPageModule.forChild(TermsPage),
    ComponentsModule,
    DirectivesModule
  ]
})
export class TermsPageModule { }
