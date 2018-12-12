import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetailsPage } from './news-details';
import { DirectivesModule } from '../../directives/directives.module';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    NewsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetailsPage),
    DirectivesModule,
    ComponentsModule,
    PipesModule
  ],
})
export class NewsDetailsPageModule {}
