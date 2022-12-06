import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoModule } from '@ngneat/transloco';
import {
  PipDocumentLayoutModule,
  PipMediaModule,
  PipMenuLayoutModule,
  PipShadowModule,
  PipTilesLayoutModule,
} from 'pip-webui-layouts-ngx';
import { MainMenuLayoutExampleComponent } from './main-menu-layout-example.component';
import { MainMenuLayoutRoutingModule } from './main-menu-layout.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatSlideToggleModule,
    MatTabsModule,
    TranslocoModule,
    PipDocumentLayoutModule,
    PipTilesLayoutModule,
    PipMediaModule,
    PipMenuLayoutModule,
    PipShadowModule,
    MainMenuLayoutRoutingModule,
  ],
  declarations: [MainMenuLayoutExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainMenuLayoutExampleModule {}
