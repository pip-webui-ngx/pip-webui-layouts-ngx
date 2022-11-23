import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipDocumentLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui2-layouts';

import { DocumentLayoutExampleComponent } from './document-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule, MatButtonModule,
    PipDocumentLayoutModule, PipMediaModule, PipShadowModule
  ],
  declarations: [DocumentLayoutExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentLayoutExampleModule { }
