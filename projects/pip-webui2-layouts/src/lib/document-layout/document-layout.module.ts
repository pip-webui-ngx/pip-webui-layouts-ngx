import { NgModule } from '@angular/core';
import { PipScrollableModule } from '../scrollable/scrollable.module';

import { PipDocumentLayoutComponent } from './document-layout.component';

@NgModule({
  declarations: [
    PipDocumentLayoutComponent
  ],
  imports: [
    PipScrollableModule
  ],
  exports: [
    PipDocumentLayoutComponent
  ],
  providers: [
    PipDocumentLayoutComponent
  ]
})
export class PipDocumentLayoutModule { }
