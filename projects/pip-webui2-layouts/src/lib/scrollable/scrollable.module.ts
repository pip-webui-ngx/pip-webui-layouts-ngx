import { NgModule } from '@angular/core';

import { PipScrollableContentComponent } from './scrollable-content.component';
import { PipScrollableComponent } from './scrollable.component';

@NgModule({
  declarations: [
    PipScrollableContentComponent,
    PipScrollableComponent
  ],
  imports: [],
  exports: [
    PipScrollableContentComponent,
    PipScrollableComponent
  ],
  providers: [
    PipScrollableContentComponent,
    PipScrollableComponent
  ]
})
export class PipScrollableModule { }
