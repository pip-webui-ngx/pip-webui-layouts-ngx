import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PipDocumentLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui-layouts-ngx';

import { DocumentLayoutExampleComponent } from './document-layout-example.component';
import { DocumentLayoutRoutingModule } from './document-layout.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    PipDocumentLayoutModule,
    PipMediaModule,
    PipShadowModule,
    DocumentLayoutRoutingModule,
  ],
  declarations: [DocumentLayoutExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DocumentLayoutExampleModule {}
