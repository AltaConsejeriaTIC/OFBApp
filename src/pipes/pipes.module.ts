import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace/replace';
import { UcfirstPipe } from './ucfirst/ucfirst';

@NgModule({
  declarations: [ReplacePipe,
    UcfirstPipe],
  imports: [],
  exports: [ReplacePipe,
    UcfirstPipe]
})
export class PipesModule { }
