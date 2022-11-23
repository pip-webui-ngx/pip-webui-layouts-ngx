import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipMediaModule, PipShadowModule, PipScrollableModule } from 'pip-webui2-layouts';

import { MainLayoutExampleComponent } from './main-layout-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    PipMediaModule, PipShadowModule, PipScrollableModule
  ],
  declarations: [MainLayoutExampleComponent]
})
export class MainLayoutExampleModule { }
