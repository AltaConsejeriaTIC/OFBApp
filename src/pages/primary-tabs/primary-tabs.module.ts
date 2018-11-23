import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimaryTabsPage } from './primary-tabs';

@NgModule({
  declarations: [
    PrimaryTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimaryTabsPage),
  ]
})
export class PrimaryTabsPageModule {}
